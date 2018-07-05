<?php
include_once '../db.php';

// $res = DB_select('select * from activation', array());

$res = DB_select("
    select
        act.`id`,
        act.code,
        act.date,
        act.status,
        act.price,
        act.pay_count,
        act.user_profile,
        COUNT(d.id) as cnt,
        GROUP_CONCAT('\n', d.device_type, ': ', d.device_name SEPARATOR ' - ') as devices
    from activation act left join devices d on act.code=d.code
    group by act.code
    order by act.id, cnt", array());


$income = 0;
foreach ($res as $key => $value) {
    $income += $value['price'];
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <title>Dashboard</title>
    <!-- Bootstrap Core CSS -->
    <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Menu CSS -->
    <link href="js/bower_components/sidebar-nav/dist/sidebar-nav.min.css" rel="stylesheet">
    <!-- toast CSS -->
    <link href="js/bower_components/toast-master/css/jquery.toast.css" rel="stylesheet">
    <!-- morris CSS -->
    <link href="js/bower_components/morrisjs/morris.css" rel="stylesheet">
    <!-- chartist CSS -->
    <link href="js/bower_components/chartist-js/dist/chartist.min.css" rel="stylesheet">
    <link href="js/bower_components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet">
    <!-- animation CSS -->
    <link href="css/animate.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
    <!-- color CSS -->
    <link href="css/colors/default.css" id="theme" rel="stylesheet">
    <style type="text/css">
        .dlist {
            padding: 0;
            list-style: inside decimal;
            white-space: nowrap;
        }        
    </style>
</head>

<body class="fix-header">
    <!-- Preloader -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>

    <!-- Wrapper -->
    <div id="wrapper">
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Dashboard</h4> </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <ol class="breadcrumb">
                            <!-- <li><a href="#">Dashboard</a></li> -->
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Общий</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash"></div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-success"></i> <span class="counter text-success"><?=$income?></span>
                                    <span>&#8381;</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Дмитро</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-purple"></i> <span class="counter text-purple"><?=$income/100*85?></span>
                                    <span>&#8381;</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Славик</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-purple"></i> <span class="counter text-purple"><?=$income/100*15?></span>
                                    <span>&#8381;</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Unique Visitor</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li class="text-right"><i class="ti-arrow-up text-info"></i> <span class="counter text-info">911</span></li>
                            </ul>
                        </div>
                    </div> -->
                </div>

                <!--/.row -->
                <!--row -->


                <!-- <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Products Yearly Sales</h3>
                            <ul class="list-inline text-right">
                                <li>
                                    <h5><i class="fa fa-circle m-r-5 text-info"></i>Mac</h5> </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5 text-inverse"></i>Windows</h5> </li>
                            </ul>
                            <div id="ct-visits" style="height: 405px;"></div>
                        </div>
                    </div>
                </div> -->


                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Генерация кода</h3>
                            <form action="generate.php" class="clearfix">
                                <div class="form-group">
                                    <input type="number" class="form-control" name="price" placeholder="Цена">
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" name="pay_count" placeholder="Оплаченое количество девайсов">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="link" placeholder="Ссылка на профиль">
                                </div>
                                <input type="submit" class="btn btn-success form-control">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Активные коды доступа</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Код</th>
                                            <th>Статус</th>
                                            <th>Дата активации</th>
                                            <th>Цена</th>
                                            <th>Ссылка</th>
                                            <th>Кол-во<br>девайсов</th>
                                            <th>Активация</th>
                                            <th>Удаление</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($res as $key => $value): ?>
                                            <tr>

                                            <td><?=$value['id']?></td>;
                                            echo '<td><input type="text" value="' . $value['code'] . '"></td>';

                                            if ($value['status']) {
                                                echo '<td><span class="text-success">Активно</span></td>';
                                            // } elseif ($value['status'] && 1) {
                                            //     echo '<td><span class="text-info">Странно</span></td>';
                                            } else {
                                                echo '<td><span class="text-danger">Неактивно</span></td>';
                                            }
                                            // echo '<td>' . $value['status'] . '</td>';
                                            echo '<td>' . $value['date'] . '</td>';
                                            echo '<td>' . $value['price'] . '('. $value['pay_count'] .')</td>';
                                            echo '<td><a target="_blank" href="' . $value['user_profile'] . '">' . $value['user_profile'] . '</a></td>';
                                            echo '<td style="cursor: pointer;"><ul class="dlist">';
                                            // echo $value['cnt'];
                                            foreach (explode(' - ', $value['devices']) as $k => $v) {
                                                echo '<li><small><span style="white-space: nowrap;">' . $v . '</span></small></li>';
                                            }
                                            echo '</ul></td>';
                                            if ($value['status']) {
                                                echo '<td><a class="btn btn-danger btn-sm" href="disable.php?id=' . $value['id'] . '">Отключить</a></td>';
                                            } else {
                                                echo '<td><a class="btn btn-success btn-sm" href="enable.php?id=' . $value['id'] . '">Включить</a></td>';
                                            }
                                            echo '<td><a class="btn btn-danger btn-sm" href="delete.php?id=' . $value['id'] . '">Удалить</a></td>';

                                            echo '</tr>';
                                        }

                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center"> 2017 &copy; Ample Admin brought to you by wrappixel.com </footer>
        </div>
        <!-- ============================================================== -->
        <!-- End Page Content -->
        <!-- ============================================================== -->
    </div>
    <script src="js/bower_components/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- Menu Plugin JavaScript -->
    <script src="js/bower_components/sidebar-nav/dist/sidebar-nav.min.js"></script>
    <!--slimscroll JavaScript -->
    <script src="js/jquery.slimscroll.js"></script>
    <!--Wave Effects -->
    <script src="js/waves.js"></script>
    <!--Counter js -->
    <script src="js/bower_components/waypoints/lib/jquery.waypoints.js"></script>
    <script src="js/bower_components/counterup/jquery.counterup.min.js"></script>
    <!-- chartist chart -->
    <script src="js/bower_components/chartist-js/dist/chartist.min.js"></script>
    <script src="js/bower_components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
    <!-- Sparkline chart JavaScript -->
    <script src="js/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>
    <!-- Custom Theme JavaScript -->
    <script src="js/custom.min.js"></script>
    <script src="js/dashboard1.js"></script>
    <script src="js/bower_components/toast-master/js/jquery.toast.js"></script>
</body>

</html>
