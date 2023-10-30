
-- !!!!!!!!!!!!
-- по неизвестной причине зафейлилась установка sql сервера. Могу приложить только этот скрипт с описанием.
-- !!!!!!!!!!!!
WITH RecSubs AS (
    -- выбираем данные по сотруднику, от которого стартует поиск, sub_level делаем 0 
    SELECT 
        id AS sub_id,
        name AS sub_name,
        parent_id,
        0 AS sub_level
    FROM subdivisions
    WHERE id = 710253
    
    UNION ALL
    -- собираем все подразделения "ниже", формируем "вложенность" и убираем 100055, 100059
    SELECT 
        s.id AS sub_id,
        s.name AS sub_name,
        s.parent_id,
        rs.sub_level + 1 AS sub_level
    FROM subdivisions s
    INNER JOIN RecSubs rs ON s.parent_id = rs.sub_id
    WHERE s.id NOT IN (100055, 100059) 
)
    -- Выбираем всех, кто подходит под наши условия и формируем окончательную таблицу. Упорядочиваем по вложенности
    SELECT 
    c.id,
    c.name,
    rs.sub_name,
    rs.sub_id,
    rs.sub_level,
    COUNT(*) OVER (PARTITION BY rs.sub_id) AS colls_count
FROM collaborators c
INNER JOIN RecSubs rs ON c.subdivision_id = rs.sub_id
WHERE c.age < 40
AND LEN(c.name) > 11
ORDER BY rs.sub_level;