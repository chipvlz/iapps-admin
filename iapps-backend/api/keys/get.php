<?php

include_once '../main.php';

$count = (isset($_GET['count']) ? 'LIMIT ' . intval($_GET['count']) : 'LIMIT 10') . ' ';
$offset = (isset($_GET['offset']) ? $count . 'OFFSET ' . intval($_GET['offset']) : $count) . ' ';
if (!isset($_GET['count']) && !isset($_GET['offset'])) {
    $offset = '';
}

// print_r($offset);

$res = DB_select("
    SELECT
        act.id,
        act.code,
        act.date,
        act.status,
        s.name as seller,
        act.pay_count,
        act.user_profile,
        COUNT(d.id) AS cnt,
        GROUP_CONCAT('\n', d.device_type, ': ', d.device_name SEPARATOR ' - ') as devices
    FROM activation act
        LEFT JOIN devices d ON act.code=d.code
        LEFT JOIN sellers s ON act.seller=s.id
    GROUP BY act.code
    ORDER BY COUNT(d.id)=0 DESC, act.user_profile='' DESC, cnt DESC, act.date ASC
    $offset
", array());


echo json_encode(array(
    'response' => array(
        'count' => intval(DB_select('SELECT COUNT(id) as count FROM activation')[0]['count']),
        'items' => $res
    ),
));