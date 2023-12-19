<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Web Page</title>
</head>

<body>

    <div class="nav-bar">
        <div class="nav-logo">
            <img src="./Images/LOGO.png" alt="logo">
        </div>
        <ul class="nav-menu">
            <li><a href="#Home">หน้าแรก</a></li>
            <li><a href="#About">แนะนำ</a></li>
            <li><a href="#News">สถานที่</a></li>
            <li><a href="#Contact">ติดต่อ</a></li>
        </ul>
        <div class="nav-search">
            <i class="fa fa-search"></i>
        </div>
    </div>

    <div class="first-section" id="Home">
        <div class="hero-banner">
            <div class="banner-title">
                <h1>4 ที่เที่ยวจังหวัดปราจีนบุรี</h1><br>
                <p>ที่เราได้รวบรวมมาในวันนี้คัดมา โดยเน้นที่จุดที่มีมุมถ่ายรูปสวยๆแบบจัดเต็ม</p>
                <center>
                    <div class="banner-button">
                        <a href="#News">
                            <span>ดูเพิ่มเติม</span>
                        </a>
                    </div>
                </center>
            </div>
        </div>
    </div>

    <div class="second-section" id="About">
        <div class="box-content">
            <div class="box-img">
                <img src="./Images/Verona-2.jpg" alt="">
            </div>
            <div class="box-title">
                <h1>แนะนำ สถานที่</h1><br>
                <p style="font-size: 16px;">
                    เมื่อคุณก้าวเข้าสู่เส้นทางที่นำเส้นทางเข้าปราจีนบุรีวันนี้ คุณจะพบกับโลก <br>
                    ของความงดงามทางธรรมชาติและวัฒนธรรมที่หลากหลายอย่างไม่ซ้ำซาก ที่นี่
                    คุณจะได้พบกับทัศนียภาพ ที่มีความสวยงามที่น่าอัศจรรย์
                    ประสบการณ์ทางวัฒนธรรมที่น่าทึ่ง และ การผจญภัยที่ไม่จำกัดขอบ
                    ช่วงเวลาที่คุณเดินทางเข้าปราจีนบุรีวันนี้คุณจะได้พบกับน้ำตกที่ทำให้ประทับใจที่สุด
                    ที่นี่น้ำไหลตกลงมาเสมอกันอย่างสวยงาม น้ำไหลตกลงมาเสมอกันอย่างสวยงามพร้อม
                    บรรยากาศอบอุ่น ของหมู่บ้านโบราณที่เป็นมรดกที่มี ความเป็นมาอันยาวนาน คุณยัง
                    สามารถสานต่อวัฒนธรรมท้องถิ่น ผ่านศิลปะ และ ขนบธรรมเนียมประเพณีของ
                    ได้อีกด้วย อย่าลืมลิ้มลองความอร่อยจากร้านอาหารท้องถิ่นที่นี่
                    อย่ารอช้า! มาร่วมพบกับปราจีนบุรีที่คุณไม่เคยรู้จักมาก่อนและ ประทับใจทุก
                    ช่วงเวลาที่คุณอยู่ที่นี่ ขอบคุณที่ให้โอกาสในการตื่นตาตื่นใจ
                </p>
            </div>
        </div>
    </div>

    <div class="third-section" id="News">
        <div class="card">
            <div class="card-content" onclick="toggleOverlay(this)">
                <div class="card-img">
                    <img src="./Images/hero-banner.png" alt="" width="600" height="400">
                </div>
                <div class="card-title">
                    <p>ดินแดนหิ่งห้อย</p>
                </div>
                <div class="card-overlay" data-overlay="cardOverlay">
                    <div class="overlay-text">
                        <img src="./Images/hero-banner.png" alt="">
                        <p>ดินแดนที่มีแสงระยิบระยับของหิ่งห้อยราวกับโลกแห่งเทพนิยาย ตั้งอยู่ที่ กรมทหารปืนใหญ่ที่ 2 <br>
                            รักษาพระองค์ ค่ายพรหมโยธี จังหวัดปราจีนบุรี
                            สภาพแวดล้อมโดยรอบเต็มไปด้วยต้นไม้น้อยใหญ่ที่มีความอุดมสมบูรณ์ <br>
                            และเงียบสงบ เมื่อถึงยามหน้าฝนก็จะเป็นช่วงเวลาที่เหล่าหิ่งห้อยนับแสนจะมาอยู่อาศัย
                            ช่วยกันส่องแสงให้ยามค่ำคืนไม่มืดมนอีกต่อไป <br>
                            แต่ก่อนเข้าชมต้องปฏิบัติตามกฏระเบียบอย่างเคร่งครัด
                            ไม่อย่างนั้นจะส่งผลกระทบให้หิ่งห้อยลดจำนวนลงได้ครับ</p>
                    </div>
                </div>
            </div>

            <div class="card-content" onclick="toggleOverlay(this)">
                <div class="card-img">
                    <img src="./Images/เขาทุ่ง.jpg" alt="" width="600" height="400">
                </div>
                <div class="card-title">
                    <p>เขาทุ่ง</p>
                </div>
                <div class="card-overlay" data-overlay="cardOverlay">
                    <div class="overlay-text">
                        <img src="./Images/เขาทุ่ง.jpg" alt="">
                        <p>สถานที่ท่องเที่ยวเส้นทางธรรมชาติของอุทยานแห่งชาติเขาใหญ่ ตั้งอยู่อำเภอนาดี จังหวัดปราจีนบุรี
                            <br>
                            สัมผัสความสวยงามของวิวทิวทัศน์และธรรมชาติที่กว้างใหญ่
                            ท่ามกลางบรรยากาศที่เย็นสบายและเพลินไปกับทะเลหมอกเป็นชั้น <br>
                            แบบที่ไม่เคยพบเจอกันที่ไหนมาก่อน จนทำให้ที่นี่รับสมญานามว่า “ภูกระดึงแห่งภาคตะวันออก” <br>
                            และยังเป็นสถานที่ที่มีอากาศบริสุทธิ์โอโซนอันดับที่ 7 ของโลก มากมายด้วยพรรณไม้นานาชนิด
                            ดอกไม้หลากหลายสายพันธุ์ <br>
                            รวมถึงสิ่งมีชีวิตอีกมากมาย</p>
                    </div>
                </div>
            </div>

            <div class="card-content" onclick="toggleOverlay(this)">
                <div class="card-img">
                    <img src="./Images/ทุ่งดอกหงอนนาค.jpg" alt="" width="600" height="400">
                </div>
                <div class="card-title">
                    <p>ทุ่งดอกหงอนนาค</p>
                </div>
                <div class="card-overlay" data-overlay="cardOverlay">
                    <div class="overlay-text">
                        <img src="./Images/ทุ่งดอกหงอนนาค.jpg" alt="">
                        <p>ใครฝันอยากเดินท่ามกลางทุ่งดอกไม้สวย บอกเลยว่าต้องมาที่นี่ ทุ่งดอกหงอนนาค ใน ศักดิ์สุภา
                            รีสอร์ท <br>
                            ที่จะบานให้เราได้ชมตั้งแต่ปลายเดือนสิงหาคมถึงต้นเดือนธันวาคมของทุกปีครับ แต่ต้องบอกก่อนว่า
                            <br>
                            เจ้าดอกหงอนนาคนี้ขึ้นชื่อว่าเป็นดอกไม้น้ำค้างกลางเที่ยง คือจะออกดอกตั้งแต่ 7
                            โมงเช้าถึงเที่ยงวัน และหุบตอนช่วงบ่าย<br>
                            เพราะงั้นใครที่แพลนจะไปเที่ยวเราแนะนำให้ไปช่วงเช้านะคะ รับรองถ่ายรูปสวยสุดปังสุด!
                            ไม่ผิดหวังแน่นอน~ </p>
                    </div>
                </div>
            </div>

            <div class="card-content" onclick="toggleOverlay(this)">
                <div class="card-img">
                    <img src="./Images/the verona.jpg" alt="" width="600" height="400">
                </div>
                <div class="card-title">
                    <p>the verona</p>
                </div>
                <div class="card-overlay" data-overlay="cardOverlay">
                    <div class="overlay-text">
                        <img src="./Images/the verona.jpg" alt="">
                        <p>ที่เที่ยวสวยสไตล์อิตาลี ภายใต้แนวคิด “ดินแดนแห่งรัก อาณาจักรแห่งการพักผ่อน” <br>
                            ที่เป็นทั้งแหล่งช้อปปิ้ง และมุมรีแลกซ์ดีๆ ท่ามกลางอากาศบริสุทธิ์ของขุนเขาใหญ่ <br>
                            ตกแต่งสวยงามโดยได้รับแรงบันดาลใจจากเมืองเวโรน่า ประเทศอิตาลี ทำให้ที่นี่มีมุมถ่ายรูปสวยๆ
                            <br>
                            ชิคๆ มากมายที่ต้องตามไปเก็บ</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="fourth-section" id="Contact">

        <div class="main">

            <div class="contact">

                <div class="contact-img">
                    <?php
                        echo '<img src="./Images/Profile.jpg" alt="Student Image">';
                    ?>
                </div>

                <div class="contact-title">
                    <?php
                        $studentID = '<b>รหัสนักศึกษา</b> : 6506021622060';
                        $name = '<b>ชื่อ-นามสกุล</b> : กิตติการณ์ อิไว น้ำดอกไม้';
                        $address = '<b>ที่อยู่</b> : 32/7 หมู่ 5 ต.บ้านพระ อ.เมืองปราจีนบุรี จ.ปราจีนบุรี';
                        $phoneNumber = '<b>เบอร์มือถือ</b> : 062-257-4383';
                        $faculty = '<b>คณะ</b> : เทคโนโลยีและการจัดการอุตสาหกรรม';
                        $department = '<b>ภาควิชา</b> : เทคโนโลยีสารสนเทศ';
                        $course = '<b>หลักสูตร</b> : เทคโนโลยีสารสนเทศ';
                        
                        echo "$studentID <br> $name <br> $address <br> $phoneNumber <br> $faculty <br> $department <br> $course <br>";
                    ?>
                </div>

            </div>

        </div>

        <div class="footer">
            <div class="icon-footer"><img src="./Icon/facebook (1).png" alt="" width="32px" height="32px"></div>
            <div class="icon-footer"><img src="./Icon/youtube (1).png" alt="" width="32px" height="32px"></div>
            <div class="icon-footer"><img src="./Icon/globe.png" alt="" width="32px" height="32px"></div>
            <div class="icon-footer"><img src="./Icon/marker.png" alt="" width="32px" height="32px"></div>
            <div class="icon-footer"><img src="./Icon/comment-alt.png" alt="" width="32px" height="32px"></div>
        </div>
    </div>

</body>

<script>
    function toggleOverlay(card) {
        var overlay = card.querySelector('.card-overlay');
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
</script>

</html>