use testdb;

SET
    STATISTICS TIME ON;

GO
    WITH RecSubs AS (
        --- Общяя таблицы выражений (CTE) с именем "RecSubs",
        SELECT
            s.id AS sub_id,
            s.name AS sub_name,
            s.parent_id,
            0 AS sub_level
        FROM
            subdivisions s --- Данные из таблицы "subdivisions" и используем ее алиас "s".
        WHERE
            s.id = (
                SELECT
                    subdivision_id
                FROM
                    collaborators
                WHERE
                    id = 710253
            ) --- Фильтр. Строки из таблицы подразделений, где ID = подразделению сотрудника с ID 710253.
        UNION
        ALL
        SELECT
            s.id,
            s.name,
            s.parent_id,
            rs.sub_level + 1
        FROM
            subdivisions s
            INNER JOIN RecSubs rs ON s.parent_id = rs.sub_id --- Объединение текущей строки таблицы "subdivisions" с результатами (CTE "RecursiveSubs") по ID родительского подразделения.
        WHERE
            s.id NOT IN (100055, 100059)
    )
SELECT
    c.id,
    c.name,
    rs.sub_name,
    rs.sub_id,
    rs.sub_level,
    (
        SELECT
            COUNT(*)
        FROM
            collaborators
        WHERE
            subdivision_id = rs.sub_id
    ) AS colls_count ---  подзапрос, считает общее количество сотрудников в текущем подразделении, чей ID подразделения совпадает с ID текущего подразделения из CTE.
FROM
    collaborators c
    JOIN RecSubs rs ON c.subdivision_id = rs.sub_id ---   Объединение данных таблицы "collaborators" с результатами CTE по ID подразделения.
WHERE
    c.age < 40
    AND LEN(c.name) > 11
ORDER BY
    rs.sub_level;

GO