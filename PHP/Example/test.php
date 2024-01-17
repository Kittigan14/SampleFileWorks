<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $num = 1;
        $sum_odd = 0;
        $sum_even = 0;
        $str = ' , ';

        for ($a = 1; $a <= 10; $a++) {
            if ($a % 2 == 0) $sum_even += $a;
            else $sum_odd += $a;
        }

        echo "Sum Odd  Numbers = $sum_odd <br>";
        echo "Sum Even Numbers = $sum_even";
    ?>
</body>
</html>
