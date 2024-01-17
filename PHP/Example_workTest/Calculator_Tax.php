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
        $Salary = isset($_POST['salary']) ? $_POST['salary'] : '';
        $Deductible = isset($_POST['deductible']) ? $_POST['deductible'] : '';
        $Expenditure = isset($_POST['expenditure']) ? $_POST['expenditure'] : '';
        $Tax = '';

        function summation($Salary, $Deductible, $Expenditure)
        {
            $Interest = 0.0;
            $Income = (($Salary * 12) - $Deductible) - $Expenditure;

            if ($Salary > 5000000) $Interest = 0.35;
            else if ($Salary >= 2000000) $Interest = 0.25;
            else if ($Salary >= 1000000) $Interest = 0.20;
            else if ($Salary >= 750000) $Interest = 0.15;
            else if ($Salary >= 500000) $Interest = 0.10;
            else if ($Salary >= 300000) $Interest = 0.05;
            else $Interest = 0.0;

            $Sum = $Income * $Interest;

            return $Sum;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($Salary !== '' && $Deductible !== '' && $Expenditure !== '') {
                $Tax = summation($Salary, $Deductible, $Expenditure);
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
                <td><input type="text" class="result" name="salary" value="<?php echo $Salary; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ค่าลดหย่อน/ปี</td>
                <td><input type="text" class="result" name="deductible" value="<?php echo $Deductible; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ค่าใช้จ่าย/ปี</td>
                <td><input type="text" class="result" name="expenditure" value="<?php echo $Expenditure; ?>"></td>
            </tr>
            <tr>
                <td class=" text-input">ภาษี</td>
                <td style="text-align: right;"><?php echo $Tax; ?></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <div class="button-container">
                        <input type="submit" value="คำนวณ">
                        <input type="submit" value="รีเซ็ตค่า">
                    </div>
                </td>
            </tr>

        </table>
    </form>
</body>

</html>
