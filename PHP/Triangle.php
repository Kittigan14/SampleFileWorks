<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectangle Area Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
        $base = 5;
        $height = 3;
        $Sum =  1/2 * ($base * $height);
    ?>
    <div class="table">
        <table border="2px" align="center" width="500" class="content">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> คำนวณพื้นที่สามเหลี่ยม </big>
                </td>
            </tr>
            <tr>
                <td>Enter Base </td>
                <td class="result"><?php echo $base; ?></td>
            </tr>
            <tr>
                <td>Enter Height </td>
                <td class="result"><?php echo $height; ?></td>
            </tr>
            <tr>
                <td>Sum 1/2 * (Base * Height) </td>
                <td class="result"><?php echo $Sum; ?></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <a href="./index.php">Back</a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
