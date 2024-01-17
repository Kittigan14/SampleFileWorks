<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    
    <?php
        $Salary = isset($_GET['salary']) ? $_GET['salary'] : '';
        $Deductible = isset($_GET['deductible']) ? $_GET['deductible'] : '';
        $Expenditure = isset($_GET['expenditure']) ? $_GET['expenditure'] : '';
        $Interest = 0;
        $Sum = '';
        
        
        function summation($Salary , $Deductible , $Expenditure, $Interest) {
            if ($Salary > 5000000) $Interest = 35;
            elseif ($Salary >= 2000000) $Interest = 25;
            elseif ($Salary >= 1000000) $Interest = 20;
            elseif ($Salary >= 750000) $Interest = 15;
            elseif ($Salary >= 500000) $Interest = 10;
            elseif ($Salary >= 300000) $Interest = 5;
            
            $Income = (($Salary * 12) - $Deductible) - $Expenditure;
            $result = $Income * ($Interest / 100);

            return $result;
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($Salary !== '' && $Deductible !== '' && $Expenditure !== '') {
                $Sum = summation($Salary , $Deductible , $Expenditure , $Interest);
            }
        }

        ?>

    <form method="post" action="">
        <table border="2px" align="center" width="500">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> Calculator </big>
                </td>
            </tr>
            <tr>
                <td class="text-input">เงินเดือน </td>
                <td><input type="text" class="result" name="start" value="<?php echo $Salary; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ค่าลดหย่อน/ปี</td>
                <td><input type="text" class="result" name="end" value="<?php echo $Deductible; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ค่าใช้จ่าย/ปี</td>
                <td><input type="text" class="result" name="end" value="<?php echo $Expenditure; ?>"</td>
            </tr>
            <tr>
                <td class=" text-input">ภาษี</td>
                <td style="text-align: right;"><?php echo $Interest; ?></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <div class="button-container">
                        <input type="submit" value="คำนวณ">
                        <input type="reset" value="รีเซ็ตค่า">
                    </div>
                </td>
            </tr>

        </table>
    </form>
</body>

</html>