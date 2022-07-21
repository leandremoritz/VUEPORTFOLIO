<template>
  <Navbar />
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
    rel="stylesheet"
    type="text/css"
  />
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  <div id="horizon">
    <div class="glow"></div>
  </div>
  <div id="earth"></div>
  <div id="title">Le-Andre Moritz</div>
  <div id="subtitle">
    <span> Aspiring </span>
    <span> Web</span>
    <span> Developer </span>
  </div>
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #011424;
  height: 100vh;
  overflow-x: hidden;

  /* background-image: url(https://i.ibb.co/S0jtV2C/red.jpg); */
  /* backdrop-filter: blur(2px); */
}

.glass {
  margin: 2%;
  width: 90vw;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
  background-position: center;
  background-size: cover;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

nav {
  padding: 30px;
}
/*
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 471px 1146px #fff, 237px 1441px #fff, 1163px 1144px #fff,
    1010px 384px #fff, 555px 880px #fff, 1960px 1643px #fff, 1575px 1137px #fff,
    963px 907px #fff, 1811px 1256px #fff, 1810px 662px #fff, 1358px 1340px #fff,
    1030px 1168px #fff, 1341px 143px #fff, 1355px 751px #fff, 1555px 281px #fff,
    1962px 438px #fff, 1580px 1706px #fff, 1126px 1926px #fff, 239px 738px #fff,
    1639px 1308px #fff, 1369px 1658px #fff, 406px 897px #fff, 591px 818px #fff,
    1944px 632px #fff, 1011px 259px #fff, 1030px 676px #fff, 952px 505px #fff,
    484px 109px #fff, 968px 1563px #fff, 1680px 1982px #fff, 375px 66px #fff,
    293px 1267px #fff, 916px 159px #fff, 670px 289px #fff, 679px 237px #fff,
    1810px 730px #fff, 446px 652px #fff, 587px 639px #fff, 201px 241px #fff,
    1287px 1081px #fff, 1261px 544px #fff, 74px 110px #fff, 1232px 1398px #fff,
    1099px 1707px #fff, 1300px 1848px #fff, 1910px 992px #fff, 880px 640px #fff,
    1319px 1586px #fff, 1821px 1443px #fff, 5px 1345px #fff, 287px 414px #fff,
    1992px 1859px #fff, 1778px 1078px #fff, 1338px 380px #fff,
    1044px 1286px #fff, 1751px 70px #fff, 1567px 1804px #fff, 1513px 114px #fff,
    1670px 1623px #fff, 515px 1077px #fff, 1889px 543px #fff, 1149px 1381px #fff,
    1347px 108px #fff, 1028px 999px #fff, 1160px 1161px #fff, 1886px 1646px #fff,
    1587px 1133px #fff, 761px 1179px #fff, 1826px 1730px #fff, 461px 1292px #fff,
    1587px 93px #fff, 372px 1272px #fff, 228px 793px #fff, 1858px 617px #fff,
    1105px 1517px #fff, 1174px 238px #fff, 748px 829px #fff, 923px 1389px #fff,
    444px 1560px #fff, 1086px 1546px #fff, 81px 140px #fff, 334px 1771px #fff,
    271px 1870px #fff, 1512px 155px #fff, 70px 658px #fff, 1320px 1340px #fff,
    97px 1429px #fff, 1382px 234px #fff, 662px 1333px #fff, 929px 1676px #fff,
    33px 1277px #fff, 371px 191px #fff, 309px 1461px #fff, 1096px 1506px #fff,
    1322px 1667px #fff, 1178px 48px #fff, 1668px 247px #fff, 1434px 618px #fff,
    1433px 1339px #fff, 765px 108px #fff, 290px 677px #fff, 773px 1183px #fff,
    1990px 950px #fff, 1003px 1249px #fff, 6px 1881px #fff, 1366px 1932px #fff,
    1885px 1211px #fff, 55px 1199px #fff, 398px 1444px #fff, 185px 81px #fff,
    1624px 773px #fff, 307px 1188px #fff, 667px 326px #fff, 1303px 1181px #fff,
    202px 1246px #fff, 386px 149px #fff, 918px 1741px #fff, 1617px 1194px #fff,
    1352px 1620px #fff, 553px 1693px #fff, 1798px 1321px #fff, 567px 283px #fff,
    1442px 1414px #fff, 1715px 1221px #fff, 1949px 1435px #fff,
    1224px 455px #fff, 485px 480px #fff, 464px 44px #fff, 1087px 1513px #fff,
    50px 830px #fff, 467px 1236px #fff, 1217px 168px #fff, 1779px 627px #fff,
    141px 1190px #fff, 1723px 748px #fff, 530px 1656px #fff, 148px 912px #fff,
    959px 1443px #fff, 1685px 344px #fff, 233px 976px #fff, 95px 435px #fff,
    1285px 1683px #fff, 368px 905px #fff, 737px 303px #fff, 535px 688px #fff,
    11px 629px #fff, 322px 84px #fff, 1195px 94px #fff, 925px 1529px #fff,
    16px 1055px #fff, 1053px 238px #fff, 810px 1608px #fff, 419px 1133px #fff,
    929px 1631px #fff, 938px 1058px #fff, 56px 1020px #fff, 433px 292px #fff,
    123px 895px #fff, 272px 1145px #fff, 485px 1254px #fff, 1445px 1383px #fff,
    446px 1597px #fff, 1772px 1926px #fff, 634px 1423px #fff, 1243px 357px #fff,
    187px 1250px #fff, 1210px 1462px #fff, 566px 638px #fff, 30px 1592px #fff,
    547px 961px #fff, 353px 13px #fff, 461px 494px #fff, 1968px 3px #fff,
    250px 13px #fff, 582px 1827px #fff, 101px 1883px #fff, 1246px 815px #fff,
    1557px 1069px #fff, 1150px 1268px #fff, 576px 921px #fff, 637px 982px #fff,
    691px 969px #fff, 736px 66px #fff, 1809px 401px #fff, 290px 1531px #fff,
    1062px 792px #fff, 160px 758px #fff, 1384px 1143px #fff, 192px 365px #fff,
    162px 1625px #fff, 1083px 103px #fff, 1050px 590px #fff, 970px 669px #fff,
    1140px 1097px #fff, 1888px 654px #fff, 65px 1303px #fff, 1432px 460px #fff,
    267px 443px #fff, 1028px 1031px #fff, 393px 288px #fff, 783px 122px #fff,
    1734px 750px #fff, 1206px 455px #fff, 738px 1161px #fff, 1538px 1162px #fff,
    544px 748px #fff, 658px 1348px #fff, 1456px 551px #fff, 1206px 865px #fff,
    605px 877px #fff, 690px 721px #fff, 837px 1107px #fff, 110px 986px #fff,
    1803px 1286px #fff, 913px 403px #fff, 286px 1569px #fff, 1743px 1371px #fff,
    1964px 1060px #fff, 21px 1527px #fff, 245px 874px #fff, 1831px 716px #fff,
    1626px 1576px #fff, 1778px 39px #fff, 988px 1930px #fff, 1322px 1585px #fff,
    11px 1808px #fff, 153px 1894px #fff, 1871px 730px #fff, 355px 1762px #fff,
    243px 268px #fff, 1440px 1926px #fff, 3px 844px #fff, 3px 1234px #fff,
    870px 1315px #fff, 604px 1580px #fff, 559px 458px #fff, 997px 695px #fff,
    1985px 70px #fff, 1984px 1840px #fff, 1180px 171px #fff, 764px 151px #fff,
    1971px 1932px #fff, 906px 114px #fff, 465px 1404px #fff, 511px 234px #fff,
    259px 763px #fff, 1739px 1799px #fff, 451px 1433px #fff, 1068px 710px #fff,
    1034px 1782px #fff, 638px 573px #fff, 1795px 804px #fff, 385px 697px #fff,
    33px 132px #fff, 495px 1163px #fff, 1303px 218px #fff, 835px 1030px #fff,
    1514px 848px #fff, 1039px 1661px #fff, 1783px 218px #fff, 1000px 132px #fff,
    1985px 767px #fff, 366px 1243px #fff, 83px 1465px #fff, 1199px 1385px #fff,
    993px 1100px #fff, 956px 1004px #fff, 1452px 1279px #fff, 10px 1315px #fff,
    1456px 529px #fff, 360px 543px #fff, 1342px 1015px #fff, 581px 702px #fff,
    1996px 1259px #fff, 1686px 668px #fff, 1103px 1982px #fff, 510px 1889px #fff,
    1101px 1998px #fff, 625px 1217px #fff, 1816px 1985px #fff, 422px 1407px #fff,
    1237px 1175px #fff, 167px 1976px #fff, 1039px 1635px #fff, 756px 1801px #fff,
    785px 67px #fff, 1080px 1612px #fff, 785px 1171px #fff, 598px 1003px #fff,
    742px 332px #fff, 719px 1729px #fff, 271px 672px #fff, 1226px 475px #fff,
    1015px 505px #fff, 1165px 1973px #fff, 389px 1164px #fff, 1719px 1959px #fff,
    1377px 1951px #fff, 1452px 1206px #fff, 1273px 1883px #fff, 107px 534px #fff,
    331px 1076px #fff, 401px 1075px #fff, 1052px 1182px #fff, 888px 1283px #fff,
    143px 1421px #fff, 534px 876px #fff, 1715px 1934px #fff, 1707px 92px #fff,
    1291px 140px #fff, 382px 1962px #fff, 363px 557px #fff, 1148px 1768px #fff,
    697px 1599px #fff, 1459px 83px #fff, 472px 842px #fff, 1016px 261px #fff,
    1727px 975px #fff, 786px 274px #fff, 1256px 862px #fff, 1046px 699px #fff,
    573px 1963px #fff, 781px 1784px #fff, 316px 141px #fff, 420px 725px #fff,
    1310px 482px #fff, 515px 1003px #fff, 1380px 580px #fff, 655px 1058px #fff,
    1630px 1611px #fff, 1599px 586px #fff, 1608px 974px #fff, 646px 1265px #fff,
    1852px 1670px #fff, 467px 1329px #fff, 1857px 790px #fff, 895px 1501px #fff,
    1202px 270px #fff, 1559px 1496px #fff, 1109px 661px #fff, 1743px 1332px #fff,
    1092px 338px #fff, 566px 1723px #fff, 564px 1231px #fff, 421px 1320px #fff,
    444px 1838px #fff, 1649px 1088px #fff, 1642px 145px #fff, 689px 674px #fff,
    1472px 1405px #fff, 1914px 1520px #fff, 466px 1348px #fff,
    1212px 1729px #fff, 1658px 1701px #fff, 1223px 112px #fff,
    1176px 1187px #fff, 519px 1849px #fff, 1286px 1545px #fff, 732px 35px #fff,
    1626px 1676px #fff, 1426px 967px #fff, 846px 1391px #fff, 30px 1444px #fff,
    485px 1742px #fff, 815px 1982px #fff, 1081px 576px #fff, 646px 215px #fff,
    937px 1740px #fff, 818px 373px #fff, 987px 1841px #fff, 684px 1170px #fff,
    1529px 1226px #fff, 301px 594px #fff, 1337px 52px #fff, 1418px 1063px #fff,
    1470px 1837px #fff, 1364px 965px #fff, 1817px 1085px #fff, 1517px 226px #fff,
    478px 1778px #fff, 206px 1738px #fff, 853px 209px #fff, 264px 1113px #fff,
    325px 64px #fff, 1784px 716px #fff, 1029px 1899px #fff, 153px 1498px #fff,
    1946px 4px #fff, 442px 1046px #fff, 1379px 1628px #fff, 716px 525px #fff,
    652px 344px #fff, 1556px 1410px #fff, 1497px 1746px #fff, 286px 1288px #fff,
    1419px 800px #fff, 993px 1175px #fff, 941px 653px #fff, 1260px 143px #fff,
    1985px 970px #fff, 1650px 1297px #fff, 605px 1422px #fff, 1299px 1357px #fff,
    1878px 390px #fff, 1074px 1410px #fff, 838px 74px #fff, 1121px 1341px #fff,
    1056px 958px #fff, 1959px 261px #fff, 1841px 798px #fff, 1064px 420px #fff,
    364px 1794px #fff, 261px 817px #fff, 1944px 1529px #fff, 1646px 1186px #fff,
    1883px 1979px #fff, 185px 843px #fff, 703px 1510px #fff, 1570px 9px #fff,
    810px 111px #fff, 1172px 1319px #fff, 1888px 633px #fff, 1214px 712px #fff,
    294px 1083px #fff, 1878px 1660px #fff, 362px 1130px #fff, 945px 1070px #fff,
    1114px 904px #fff, 28px 835px #fff, 1612px 253px #fff, 1573px 396px #fff,
    84px 212px #fff, 1979px 1695px #fff, 194px 770px #fff, 1593px 363px #fff,
    131px 1740px #fff, 1541px 435px #fff, 1112px 885px #fff, 1400px 1582px #fff,
    1516px 1526px #fff, 514px 916px #fff, 530px 776px #fff, 1017px 956px #fff,
    354px 321px #fff, 862px 355px #fff, 413px 212px #fff, 1124px 253px #fff,
    426px 1842px #fff, 291px 1704px #fff, 1448px 364px #fff, 1442px 1105px #fff,
    661px 194px #fff, 394px 1832px #fff, 1454px 1974px #fff, 1714px 1190px #fff,
    530px 136px #fff, 1871px 1719px #fff, 619px 178px #fff, 509px 678px #fff,
    479px 1278px #fff, 1081px 512px #fff, 368px 947px #fff, 89px 54px #fff,
    1331px 122px #fff, 1445px 375px #fff, 1940px 736px #fff, 269px 538px #fff,
    1741px 516px #fff, 988px 330px #fff, 1819px 423px #fff, 1563px 915px #fff,
    1310px 1420px #fff, 409px 875px #fff, 366px 595px #fff, 148px 771px #fff,
    1246px 484px #fff, 1169px 733px #fff, 884px 628px #fff, 149px 142px #fff,
    347px 479px #fff, 459px 458px #fff, 528px 396px #fff, 338px 166px #fff,
    238px 792px #fff, 1249px 618px #fff, 705px 375px #fff, 601px 1097px #fff,
    1197px 690px #fff, 299px 683px #fff, 1360px 1014px #fff, 683px 927px #fff,
    1303px 1611px #fff, 1025px 394px #fff, 71px 629px #fff, 1942px 1179px #fff,
    1324px 613px #fff, 1581px 276px #fff, 1743px 272px #fff, 1867px 381px #fff,
    1456px 22px #fff, 83px 1923px #fff, 828px 178px #fff, 1464px 440px #fff,
    541px 1704px #fff, 918px 1257px #fff, 1929px 1590px #fff, 952px 706px #fff,
    347px 1442px #fff, 1045px 1251px #fff, 1318px 1950px #fff, 590px 347px #fff,
    749px 1619px #fff, 1687px 1716px #fff, 779px 1957px #fff, 1956px 1873px #fff,
    425px 1236px #fff, 985px 1022px #fff, 1883px 224px #fff, 1065px 700px #fff,
    1735px 1566px #fff, 1534px 1250px #fff, 1773px 746px #fff,
    1232px 1345px #fff, 86px 360px #fff, 616px 1384px #fff, 1555px 166px #fff,
    409px 22px #fff, 389px 1738px #fff, 1809px 1903px #fff, 957px 195px #fff,
    1858px 1302px #fff, 378px 1792px #fff, 164px 1973px #fff, 68px 202px #fff,
    166px 1058px #fff, 642px 162px #fff, 1438px 1094px #fff, 1304px 168px #fff,
    1312px 1911px #fff, 1575px 940px #fff, 23px 897px #fff, 1864px 852px #fff,
    462px 866px #fff, 998px 356px #fff, 1271px 708px #fff, 1814px 105px #fff,
    375px 1197px #fff, 840px 1914px #fff, 1108px 534px #fff, 1206px 1258px #fff,
    1194px 1133px #fff, 209px 1097px #fff, 670px 156px #fff, 1757px 946px #fff,
    742px 1197px #fff, 152px 1279px #fff, 54px 959px #fff, 1208px 1187px #fff,
    44px 1416px #fff, 362px 1709px #fff, 1981px 803px #fff, 1817px 1748px #fff,
    704px 1920px #fff, 670px 248px #fff, 508px 775px #fff, 1942px 513px #fff,
    950px 81px #fff, 1016px 955px #fff, 1266px 1819px #fff, 380px 189px #fff,
    981px 177px #fff, 1649px 1103px #fff, 1483px 384px #fff, 526px 208px #fff,
    421px 618px #fff, 604px 1034px #fff, 981px 1273px #fff, 1859px 1132px #fff,
    686px 974px #fff, 1722px 1258px #fff, 1548px 1643px #fff, 1796px 926px #fff,
    773px 728px #fff, 859px 1988px #fff, 990px 1149px #fff, 1346px 161px #fff,
    1256px 1518px #fff, 1959px 585px #fff, 1044px 1101px #fff,
    1829px 1619px #fff, 1959px 1020px #fff, 468px 1303px #fff, 1396px 679px #fff,
    1331px 1173px #fff, 429px 1495px #fff, 1612px 141px #fff, 837px 368px #fff,
    1626px 1006px #fff, 460px 1554px #fff, 1416px 716px #fff, 1047px 1308px #fff,
    1845px 1258px #fff, 849px 1905px #fff, 933px 145px #fff, 1206px 248px #fff,
    1867px 765px #fff, 987px 868px #fff, 1140px 1064px #fff, 311px 439px #fff,
    29px 908px #fff, 1601px 1969px #fff, 84px 1312px #fff, 1804px 142px #fff,
    570px 1894px #fff, 1988px 232px #fff, 1422px 82px #fff, 432px 1056px #fff,
    361px 1316px #fff, 269px 531px #fff, 1032px 314px #fff, 1016px 1882px #fff,
    59px 1708px #fff, 856px 1915px #fff, 1598px 1785px #fff, 205px 55px #fff,
    490px 6px #fff, 1593px 1862px #fff, 1492px 1714px #fff, 469px 612px #fff,
    973px 12px #fff, 1643px 1784px #fff, 832px 702px #fff, 1545px 1179px #fff,
    912px 1157px #fff, 627px 1756px #fff, 797px 1655px #fff, 224px 1811px #fff,
    722px 1812px #fff, 698px 436px #fff, 841px 1173px #fff, 1415px 1821px #fff,
    505px 1586px #fff, 101px 457px #fff, 1281px 517px #fff, 1389px 1865px #fff,
    1039px 550px #fff, 1305px 479px #fff, 472px 502px #fff, 1052px 973px #fff,
    509px 116px #fff, 755px 774px #fff, 1006px 985px #fff, 680px 692px #fff,
    353px 991px #fff, 1529px 212px #fff, 729px 983px #fff, 1659px 888px #fff,
    960px 612px #fff, 865px 1359px #fff, 530px 62px #fff, 1713px 1118px #fff,
    1902px 1479px #fff, 784px 1638px #fff, 1832px 1862px #fff, 977px 1340px #fff,
    1276px 1837px #fff, 1404px 1377px #fff, 693px 417px #fff, 537px 1792px #fff,
    441px 1169px #fff, 1852px 491px #fff, 992px 1482px #fff, 280px 248px #fff,
    1277px 1320px #fff, 246px 1165px #fff, 227px 453px #fff, 1752px 634px #fff,
    509px 527px #fff, 1466px 782px #fff, 785px 675px #fff, 1649px 1650px #fff,
    728px 1406px #fff, 177px 1346px #fff, 1158px 1658px #fff, 1426px 1911px #fff,
    1383px 345px #fff, 1369px 121px #fff, 324px 915px #fff, 715px 133px #fff,
    354px 1740px #fff, 1016px 613px #fff, 1286px 576px #fff, 154px 750px #fff,
    1584px 268px #fff, 247px 1317px #fff, 123px 1119px #fff, 1271px 233px #fff,
    1283px 160px #fff, 59px 1061px #fff, 1386px 394px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 471px 1146px #fff, 237px 1441px #fff, 1163px 1144px #fff,
    1010px 384px #fff, 555px 880px #fff, 1960px 1643px #fff, 1575px 1137px #fff,
    963px 907px #fff, 1811px 1256px #fff, 1810px 662px #fff, 1358px 1340px #fff,
    1030px 1168px #fff, 1341px 143px #fff, 1355px 751px #fff, 1555px 281px #fff,
    1962px 438px #fff, 1580px 1706px #fff, 1126px 1926px #fff, 239px 738px #fff,
    1639px 1308px #fff, 1369px 1658px #fff, 406px 897px #fff, 591px 818px #fff,
    1944px 632px #fff, 1011px 259px #fff, 1030px 676px #fff, 952px 505px #fff,
    484px 109px #fff, 968px 1563px #fff, 1680px 1982px #fff, 375px 66px #fff,
    293px 1267px #fff, 916px 159px #fff, 670px 289px #fff, 679px 237px #fff,
    1810px 730px #fff, 446px 652px #fff, 587px 639px #fff, 201px 241px #fff,
    1287px 1081px #fff, 1261px 544px #fff, 74px 110px #fff, 1232px 1398px #fff,
    1099px 1707px #fff, 1300px 1848px #fff, 1910px 992px #fff, 880px 640px #fff,
    1319px 1586px #fff, 1821px 1443px #fff, 5px 1345px #fff, 287px 414px #fff,
    1992px 1859px #fff, 1778px 1078px #fff, 1338px 380px #fff,
    1044px 1286px #fff, 1751px 70px #fff, 1567px 1804px #fff, 1513px 114px #fff,
    1670px 1623px #fff, 515px 1077px #fff, 1889px 543px #fff, 1149px 1381px #fff,
    1347px 108px #fff, 1028px 999px #fff, 1160px 1161px #fff, 1886px 1646px #fff,
    1587px 1133px #fff, 761px 1179px #fff, 1826px 1730px #fff, 461px 1292px #fff,
    1587px 93px #fff, 372px 1272px #fff, 228px 793px #fff, 1858px 617px #fff,
    1105px 1517px #fff, 1174px 238px #fff, 748px 829px #fff, 923px 1389px #fff,
    444px 1560px #fff, 1086px 1546px #fff, 81px 140px #fff, 334px 1771px #fff,
    271px 1870px #fff, 1512px 155px #fff, 70px 658px #fff, 1320px 1340px #fff,
    97px 1429px #fff, 1382px 234px #fff, 662px 1333px #fff, 929px 1676px #fff,
    33px 1277px #fff, 371px 191px #fff, 309px 1461px #fff, 1096px 1506px #fff,
    1322px 1667px #fff, 1178px 48px #fff, 1668px 247px #fff, 1434px 618px #fff,
    1433px 1339px #fff, 765px 108px #fff, 290px 677px #fff, 773px 1183px #fff,
    1990px 950px #fff, 1003px 1249px #fff, 6px 1881px #fff, 1366px 1932px #fff,
    1885px 1211px #fff, 55px 1199px #fff, 398px 1444px #fff, 185px 81px #fff,
    1624px 773px #fff, 307px 1188px #fff, 667px 326px #fff, 1303px 1181px #fff,
    202px 1246px #fff, 386px 149px #fff, 918px 1741px #fff, 1617px 1194px #fff,
    1352px 1620px #fff, 553px 1693px #fff, 1798px 1321px #fff, 567px 283px #fff,
    1442px 1414px #fff, 1715px 1221px #fff, 1949px 1435px #fff,
    1224px 455px #fff, 485px 480px #fff, 464px 44px #fff, 1087px 1513px #fff,
    50px 830px #fff, 467px 1236px #fff, 1217px 168px #fff, 1779px 627px #fff,
    141px 1190px #fff, 1723px 748px #fff, 530px 1656px #fff, 148px 912px #fff,
    959px 1443px #fff, 1685px 344px #fff, 233px 976px #fff, 95px 435px #fff,
    1285px 1683px #fff, 368px 905px #fff, 737px 303px #fff, 535px 688px #fff,
    11px 629px #fff, 322px 84px #fff, 1195px 94px #fff, 925px 1529px #fff,
    16px 1055px #fff, 1053px 238px #fff, 810px 1608px #fff, 419px 1133px #fff,
    929px 1631px #fff, 938px 1058px #fff, 56px 1020px #fff, 433px 292px #fff,
    123px 895px #fff, 272px 1145px #fff, 485px 1254px #fff, 1445px 1383px #fff,
    446px 1597px #fff, 1772px 1926px #fff, 634px 1423px #fff, 1243px 357px #fff,
    187px 1250px #fff, 1210px 1462px #fff, 566px 638px #fff, 30px 1592px #fff,
    547px 961px #fff, 353px 13px #fff, 461px 494px #fff, 1968px 3px #fff,
    250px 13px #fff, 582px 1827px #fff, 101px 1883px #fff, 1246px 815px #fff,
    1557px 1069px #fff, 1150px 1268px #fff, 576px 921px #fff, 637px 982px #fff,
    691px 969px #fff, 736px 66px #fff, 1809px 401px #fff, 290px 1531px #fff,
    1062px 792px #fff, 160px 758px #fff, 1384px 1143px #fff, 192px 365px #fff,
    162px 1625px #fff, 1083px 103px #fff, 1050px 590px #fff, 970px 669px #fff,
    1140px 1097px #fff, 1888px 654px #fff, 65px 1303px #fff, 1432px 460px #fff,
    267px 443px #fff, 1028px 1031px #fff, 393px 288px #fff, 783px 122px #fff,
    1734px 750px #fff, 1206px 455px #fff, 738px 1161px #fff, 1538px 1162px #fff,
    544px 748px #fff, 658px 1348px #fff, 1456px 551px #fff, 1206px 865px #fff,
    605px 877px #fff, 690px 721px #fff, 837px 1107px #fff, 110px 986px #fff,
    1803px 1286px #fff, 913px 403px #fff, 286px 1569px #fff, 1743px 1371px #fff,
    1964px 1060px #fff, 21px 1527px #fff, 245px 874px #fff, 1831px 716px #fff,
    1626px 1576px #fff, 1778px 39px #fff, 988px 1930px #fff, 1322px 1585px #fff,
    11px 1808px #fff, 153px 1894px #fff, 1871px 730px #fff, 355px 1762px #fff,
    243px 268px #fff, 1440px 1926px #fff, 3px 844px #fff, 3px 1234px #fff,
    870px 1315px #fff, 604px 1580px #fff, 559px 458px #fff, 997px 695px #fff,
    1985px 70px #fff, 1984px 1840px #fff, 1180px 171px #fff, 764px 151px #fff,
    1971px 1932px #fff, 906px 114px #fff, 465px 1404px #fff, 511px 234px #fff,
    259px 763px #fff, 1739px 1799px #fff, 451px 1433px #fff, 1068px 710px #fff,
    1034px 1782px #fff, 638px 573px #fff, 1795px 804px #fff, 385px 697px #fff,
    33px 132px #fff, 495px 1163px #fff, 1303px 218px #fff, 835px 1030px #fff,
    1514px 848px #fff, 1039px 1661px #fff, 1783px 218px #fff, 1000px 132px #fff,
    1985px 767px #fff, 366px 1243px #fff, 83px 1465px #fff, 1199px 1385px #fff,
    993px 1100px #fff, 956px 1004px #fff, 1452px 1279px #fff, 10px 1315px #fff,
    1456px 529px #fff, 360px 543px #fff, 1342px 1015px #fff, 581px 702px #fff,
    1996px 1259px #fff, 1686px 668px #fff, 1103px 1982px #fff, 510px 1889px #fff,
    1101px 1998px #fff, 625px 1217px #fff, 1816px 1985px #fff, 422px 1407px #fff,
    1237px 1175px #fff, 167px 1976px #fff, 1039px 1635px #fff, 756px 1801px #fff,
    785px 67px #fff, 1080px 1612px #fff, 785px 1171px #fff, 598px 1003px #fff,
    742px 332px #fff, 719px 1729px #fff, 271px 672px #fff, 1226px 475px #fff,
    1015px 505px #fff, 1165px 1973px #fff, 389px 1164px #fff, 1719px 1959px #fff,
    1377px 1951px #fff, 1452px 1206px #fff, 1273px 1883px #fff, 107px 534px #fff,
    331px 1076px #fff, 401px 1075px #fff, 1052px 1182px #fff, 888px 1283px #fff,
    143px 1421px #fff, 534px 876px #fff, 1715px 1934px #fff, 1707px 92px #fff,
    1291px 140px #fff, 382px 1962px #fff, 363px 557px #fff, 1148px 1768px #fff,
    697px 1599px #fff, 1459px 83px #fff, 472px 842px #fff, 1016px 261px #fff,
    1727px 975px #fff, 786px 274px #fff, 1256px 862px #fff, 1046px 699px #fff,
    573px 1963px #fff, 781px 1784px #fff, 316px 141px #fff, 420px 725px #fff,
    1310px 482px #fff, 515px 1003px #fff, 1380px 580px #fff, 655px 1058px #fff,
    1630px 1611px #fff, 1599px 586px #fff, 1608px 974px #fff, 646px 1265px #fff,
    1852px 1670px #fff, 467px 1329px #fff, 1857px 790px #fff, 895px 1501px #fff,
    1202px 270px #fff, 1559px 1496px #fff, 1109px 661px #fff, 1743px 1332px #fff,
    1092px 338px #fff, 566px 1723px #fff, 564px 1231px #fff, 421px 1320px #fff,
    444px 1838px #fff, 1649px 1088px #fff, 1642px 145px #fff, 689px 674px #fff,
    1472px 1405px #fff, 1914px 1520px #fff, 466px 1348px #fff,
    1212px 1729px #fff, 1658px 1701px #fff, 1223px 112px #fff,
    1176px 1187px #fff, 519px 1849px #fff, 1286px 1545px #fff, 732px 35px #fff,
    1626px 1676px #fff, 1426px 967px #fff, 846px 1391px #fff, 30px 1444px #fff,
    485px 1742px #fff, 815px 1982px #fff, 1081px 576px #fff, 646px 215px #fff,
    937px 1740px #fff, 818px 373px #fff, 987px 1841px #fff, 684px 1170px #fff,
    1529px 1226px #fff, 301px 594px #fff, 1337px 52px #fff, 1418px 1063px #fff,
    1470px 1837px #fff, 1364px 965px #fff, 1817px 1085px #fff, 1517px 226px #fff,
    478px 1778px #fff, 206px 1738px #fff, 853px 209px #fff, 264px 1113px #fff,
    325px 64px #fff, 1784px 716px #fff, 1029px 1899px #fff, 153px 1498px #fff,
    1946px 4px #fff, 442px 1046px #fff, 1379px 1628px #fff, 716px 525px #fff,
    652px 344px #fff, 1556px 1410px #fff, 1497px 1746px #fff, 286px 1288px #fff,
    1419px 800px #fff, 993px 1175px #fff, 941px 653px #fff, 1260px 143px #fff,
    1985px 970px #fff, 1650px 1297px #fff, 605px 1422px #fff, 1299px 1357px #fff,
    1878px 390px #fff, 1074px 1410px #fff, 838px 74px #fff, 1121px 1341px #fff,
    1056px 958px #fff, 1959px 261px #fff, 1841px 798px #fff, 1064px 420px #fff,
    364px 1794px #fff, 261px 817px #fff, 1944px 1529px #fff, 1646px 1186px #fff,
    1883px 1979px #fff, 185px 843px #fff, 703px 1510px #fff, 1570px 9px #fff,
    810px 111px #fff, 1172px 1319px #fff, 1888px 633px #fff, 1214px 712px #fff,
    294px 1083px #fff, 1878px 1660px #fff, 362px 1130px #fff, 945px 1070px #fff,
    1114px 904px #fff, 28px 835px #fff, 1612px 253px #fff, 1573px 396px #fff,
    84px 212px #fff, 1979px 1695px #fff, 194px 770px #fff, 1593px 363px #fff,
    131px 1740px #fff, 1541px 435px #fff, 1112px 885px #fff, 1400px 1582px #fff,
    1516px 1526px #fff, 514px 916px #fff, 530px 776px #fff, 1017px 956px #fff,
    354px 321px #fff, 862px 355px #fff, 413px 212px #fff, 1124px 253px #fff,
    426px 1842px #fff, 291px 1704px #fff, 1448px 364px #fff, 1442px 1105px #fff,
    661px 194px #fff, 394px 1832px #fff, 1454px 1974px #fff, 1714px 1190px #fff,
    530px 136px #fff, 1871px 1719px #fff, 619px 178px #fff, 509px 678px #fff,
    479px 1278px #fff, 1081px 512px #fff, 368px 947px #fff, 89px 54px #fff,
    1331px 122px #fff, 1445px 375px #fff, 1940px 736px #fff, 269px 538px #fff,
    1741px 516px #fff, 988px 330px #fff, 1819px 423px #fff, 1563px 915px #fff,
    1310px 1420px #fff, 409px 875px #fff, 366px 595px #fff, 148px 771px #fff,
    1246px 484px #fff, 1169px 733px #fff, 884px 628px #fff, 149px 142px #fff,
    347px 479px #fff, 459px 458px #fff, 528px 396px #fff, 338px 166px #fff,
    238px 792px #fff, 1249px 618px #fff, 705px 375px #fff, 601px 1097px #fff,
    1197px 690px #fff, 299px 683px #fff, 1360px 1014px #fff, 683px 927px #fff,
    1303px 1611px #fff, 1025px 394px #fff, 71px 629px #fff, 1942px 1179px #fff,
    1324px 613px #fff, 1581px 276px #fff, 1743px 272px #fff, 1867px 381px #fff,
    1456px 22px #fff, 83px 1923px #fff, 828px 178px #fff, 1464px 440px #fff,
    541px 1704px #fff, 918px 1257px #fff, 1929px 1590px #fff, 952px 706px #fff,
    347px 1442px #fff, 1045px 1251px #fff, 1318px 1950px #fff, 590px 347px #fff,
    749px 1619px #fff, 1687px 1716px #fff, 779px 1957px #fff, 1956px 1873px #fff,
    425px 1236px #fff, 985px 1022px #fff, 1883px 224px #fff, 1065px 700px #fff,
    1735px 1566px #fff, 1534px 1250px #fff, 1773px 746px #fff,
    1232px 1345px #fff, 86px 360px #fff, 616px 1384px #fff, 1555px 166px #fff,
    409px 22px #fff, 389px 1738px #fff, 1809px 1903px #fff, 957px 195px #fff,
    1858px 1302px #fff, 378px 1792px #fff, 164px 1973px #fff, 68px 202px #fff,
    166px 1058px #fff, 642px 162px #fff, 1438px 1094px #fff, 1304px 168px #fff,
    1312px 1911px #fff, 1575px 940px #fff, 23px 897px #fff, 1864px 852px #fff,
    462px 866px #fff, 998px 356px #fff, 1271px 708px #fff, 1814px 105px #fff,
    375px 1197px #fff, 840px 1914px #fff, 1108px 534px #fff, 1206px 1258px #fff,
    1194px 1133px #fff, 209px 1097px #fff, 670px 156px #fff, 1757px 946px #fff,
    742px 1197px #fff, 152px 1279px #fff, 54px 959px #fff, 1208px 1187px #fff,
    44px 1416px #fff, 362px 1709px #fff, 1981px 803px #fff, 1817px 1748px #fff,
    704px 1920px #fff, 670px 248px #fff, 508px 775px #fff, 1942px 513px #fff,
    950px 81px #fff, 1016px 955px #fff, 1266px 1819px #fff, 380px 189px #fff,
    981px 177px #fff, 1649px 1103px #fff, 1483px 384px #fff, 526px 208px #fff,
    421px 618px #fff, 604px 1034px #fff, 981px 1273px #fff, 1859px 1132px #fff,
    686px 974px #fff, 1722px 1258px #fff, 1548px 1643px #fff, 1796px 926px #fff,
    773px 728px #fff, 859px 1988px #fff, 990px 1149px #fff, 1346px 161px #fff,
    1256px 1518px #fff, 1959px 585px #fff, 1044px 1101px #fff,
    1829px 1619px #fff, 1959px 1020px #fff, 468px 1303px #fff, 1396px 679px #fff,
    1331px 1173px #fff, 429px 1495px #fff, 1612px 141px #fff, 837px 368px #fff,
    1626px 1006px #fff, 460px 1554px #fff, 1416px 716px #fff, 1047px 1308px #fff,
    1845px 1258px #fff, 849px 1905px #fff, 933px 145px #fff, 1206px 248px #fff,
    1867px 765px #fff, 987px 868px #fff, 1140px 1064px #fff, 311px 439px #fff,
    29px 908px #fff, 1601px 1969px #fff, 84px 1312px #fff, 1804px 142px #fff,
    570px 1894px #fff, 1988px 232px #fff, 1422px 82px #fff, 432px 1056px #fff,
    361px 1316px #fff, 269px 531px #fff, 1032px 314px #fff, 1016px 1882px #fff,
    59px 1708px #fff, 856px 1915px #fff, 1598px 1785px #fff, 205px 55px #fff,
    490px 6px #fff, 1593px 1862px #fff, 1492px 1714px #fff, 469px 612px #fff,
    973px 12px #fff, 1643px 1784px #fff, 832px 702px #fff, 1545px 1179px #fff,
    912px 1157px #fff, 627px 1756px #fff, 797px 1655px #fff, 224px 1811px #fff,
    722px 1812px #fff, 698px 436px #fff, 841px 1173px #fff, 1415px 1821px #fff,
    505px 1586px #fff, 101px 457px #fff, 1281px 517px #fff, 1389px 1865px #fff,
    1039px 550px #fff, 1305px 479px #fff, 472px 502px #fff, 1052px 973px #fff,
    509px 116px #fff, 755px 774px #fff, 1006px 985px #fff, 680px 692px #fff,
    353px 991px #fff, 1529px 212px #fff, 729px 983px #fff, 1659px 888px #fff,
    960px 612px #fff, 865px 1359px #fff, 530px 62px #fff, 1713px 1118px #fff,
    1902px 1479px #fff, 784px 1638px #fff, 1832px 1862px #fff, 977px 1340px #fff,
    1276px 1837px #fff, 1404px 1377px #fff, 693px 417px #fff, 537px 1792px #fff,
    441px 1169px #fff, 1852px 491px #fff, 992px 1482px #fff, 280px 248px #fff,
    1277px 1320px #fff, 246px 1165px #fff, 227px 453px #fff, 1752px 634px #fff,
    509px 527px #fff, 1466px 782px #fff, 785px 675px #fff, 1649px 1650px #fff,
    728px 1406px #fff, 177px 1346px #fff, 1158px 1658px #fff, 1426px 1911px #fff,
    1383px 345px #fff, 1369px 121px #fff, 324px 915px #fff, 715px 133px #fff,
    354px 1740px #fff, 1016px 613px #fff, 1286px 576px #fff, 154px 750px #fff,
    1584px 268px #fff, 247px 1317px #fff, 123px 1119px #fff, 1271px 233px #fff,
    1283px 160px #fff, 59px 1061px #fff, 1386px 394px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 7px 1718px #fff, 329px 1046px #fff, 1918px 1919px #fff,
    358px 294px #fff, 1911px 358px #fff, 316px 679px #fff, 433px 1906px #fff,
    1016px 50px #fff, 1650px 1724px #fff, 86px 786px #fff, 268px 1025px #fff,
    1787px 242px #fff, 1313px 333px #fff, 1797px 358px #fff, 1214px 649px #fff,
    1663px 1186px #fff, 524px 238px #fff, 11px 554px #fff, 1887px 1009px #fff,
    825px 589px #fff, 1108px 1306px #fff, 102px 1892px #fff, 751px 623px #fff,
    1441px 197px #fff, 311px 231px #fff, 1526px 499px #fff, 1142px 1461px #fff,
    1949px 706px #fff, 1611px 1101px #fff, 1899px 238px #fff, 571px 1436px #fff,
    1010px 248px #fff, 290px 549px #fff, 691px 1591px #fff, 550px 1041px #fff,
    1896px 1332px #fff, 1590px 419px #fff, 609px 1375px #fff, 174px 882px #fff,
    482px 1165px #fff, 1623px 131px #fff, 1029px 1582px #fff, 257px 703px #fff,
    1701px 1523px #fff, 1313px 1809px #fff, 530px 1868px #fff, 1513px 122px #fff,
    666px 1490px #fff, 789px 882px #fff, 444px 87px #fff, 1256px 247px #fff,
    307px 593px #fff, 871px 587px #fff, 135px 851px #fff, 1576px 493px #fff,
    1340px 627px #fff, 1003px 604px #fff, 1400px 1681px #fff, 1670px 1665px #fff,
    1528px 89px #fff, 541px 739px #fff, 1277px 1397px #fff, 1289px 1928px #fff,
    369px 885px #fff, 314px 1242px #fff, 1376px 1116px #fff, 1943px 158px #fff,
    700px 962px #fff, 967px 327px #fff, 1608px 1152px #fff, 223px 77px #fff,
    1411px 800px #fff, 454px 626px #fff, 703px 1265px #fff, 1311px 774px #fff,
    33px 425px #fff, 1887px 1338px #fff, 1899px 828px #fff, 575px 1383px #fff,
    1477px 1588px #fff, 720px 1695px #fff, 1297px 1609px #fff, 1854px 380px #fff,
    1001px 1579px #fff, 491px 635px #fff, 472px 900px #fff, 1411px 1349px #fff,
    978px 886px #fff, 469px 1048px #fff, 624px 1094px #fff, 778px 1356px #fff,
    698px 1040px #fff, 390px 1306px #fff, 790px 1917px #fff, 246px 818px #fff,
    382px 423px #fff, 1995px 1536px #fff, 209px 1761px #fff, 1487px 1265px #fff,
    227px 296px #fff, 558px 1520px #fff, 541px 1567px #fff, 845px 35px #fff,
    1528px 347px #fff, 1944px 704px #fff, 1551px 314px #fff, 86px 1887px #fff,
    930px 1656px #fff, 773px 1727px #fff, 295px 1359px #fff, 376px 631px #fff,
    607px 377px #fff, 453px 13px #fff, 63px 941px #fff, 86px 788px #fff,
    1094px 1980px #fff, 1133px 755px #fff, 381px 1312px #fff, 1766px 938px #fff,
    306px 671px #fff, 1766px 661px #fff, 1362px 1676px #fff, 1298px 1391px #fff,
    1263px 1637px #fff, 1266px 105px #fff, 1846px 1314px #fff, 1317px 647px #fff,
    1852px 668px #fff, 183px 1964px #fff, 1597px 907px #fff, 365px 1412px #fff,
    251px 763px #fff, 1779px 1319px #fff, 1268px 1462px #fff, 172px 1368px #fff,
    310px 1514px #fff, 79px 1072px #fff, 1864px 182px #fff, 1564px 1763px #fff,
    1458px 1857px #fff, 1360px 44px #fff, 693px 1080px #fff, 260px 1304px #fff,
    1719px 801px #fff, 427px 1766px #fff, 1237px 143px #fff, 1975px 251px #fff,
    254px 1467px #fff, 106px 1644px #fff, 1484px 1078px #fff, 378px 1430px #fff,
    1902px 553px #fff, 919px 148px #fff, 658px 1700px #fff, 1562px 310px #fff,
    926px 1534px #fff, 764px 75px #fff, 1922px 349px #fff, 824px 1523px #fff,
    1148px 399px #fff, 1123px 1785px #fff, 259px 305px #fff, 821px 1875px #fff,
    1566px 1982px #fff, 644px 911px #fff, 1396px 318px #fff, 468px 370px #fff,
    977px 1798px #fff, 792px 1123px #fff, 189px 937px #fff, 1996px 820px #fff,
    201px 498px #fff, 1743px 1977px #fff, 1107px 1641px #fff, 179px 1585px #fff,
    912px 842px #fff, 1013px 812px #fff, 1764px 487px #fff, 757px 1066px #fff,
    377px 691px #fff, 627px 1848px #fff, 1903px 1821px #fff, 637px 169px #fff,
    1547px 541px #fff, 79px 1555px #fff, 35px 364px #fff, 294px 1569px #fff,
    1353px 1747px #fff, 510px 1941px #fff, 1032px 1958px #fff, 105px 130px #fff,
    575px 302px #fff, 219px 995px #fff, 1370px 1887px #fff, 1061px 218px #fff,
    1742px 1904px #fff, 1561px 1277px #fff, 202px 370px #fff, 1482px 1155px #fff,
    832px 1093px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 7px 1718px #fff, 329px 1046px #fff, 1918px 1919px #fff,
    358px 294px #fff, 1911px 358px #fff, 316px 679px #fff, 433px 1906px #fff,
    1016px 50px #fff, 1650px 1724px #fff, 86px 786px #fff, 268px 1025px #fff,
    1787px 242px #fff, 1313px 333px #fff, 1797px 358px #fff, 1214px 649px #fff,
    1663px 1186px #fff, 524px 238px #fff, 11px 554px #fff, 1887px 1009px #fff,
    825px 589px #fff, 1108px 1306px #fff, 102px 1892px #fff, 751px 623px #fff,
    1441px 197px #fff, 311px 231px #fff, 1526px 499px #fff, 1142px 1461px #fff,
    1949px 706px #fff, 1611px 1101px #fff, 1899px 238px #fff, 571px 1436px #fff,
    1010px 248px #fff, 290px 549px #fff, 691px 1591px #fff, 550px 1041px #fff,
    1896px 1332px #fff, 1590px 419px #fff, 609px 1375px #fff, 174px 882px #fff,
    482px 1165px #fff, 1623px 131px #fff, 1029px 1582px #fff, 257px 703px #fff,
    1701px 1523px #fff, 1313px 1809px #fff, 530px 1868px #fff, 1513px 122px #fff,
    666px 1490px #fff, 789px 882px #fff, 444px 87px #fff, 1256px 247px #fff,
    307px 593px #fff, 871px 587px #fff, 135px 851px #fff, 1576px 493px #fff,
    1340px 627px #fff, 1003px 604px #fff, 1400px 1681px #fff, 1670px 1665px #fff,
    1528px 89px #fff, 541px 739px #fff, 1277px 1397px #fff, 1289px 1928px #fff,
    369px 885px #fff, 314px 1242px #fff, 1376px 1116px #fff, 1943px 158px #fff,
    700px 962px #fff, 967px 327px #fff, 1608px 1152px #fff, 223px 77px #fff,
    1411px 800px #fff, 454px 626px #fff, 703px 1265px #fff, 1311px 774px #fff,
    33px 425px #fff, 1887px 1338px #fff, 1899px 828px #fff, 575px 1383px #fff,
    1477px 1588px #fff, 720px 1695px #fff, 1297px 1609px #fff, 1854px 380px #fff,
    1001px 1579px #fff, 491px 635px #fff, 472px 900px #fff, 1411px 1349px #fff,
    978px 886px #fff, 469px 1048px #fff, 624px 1094px #fff, 778px 1356px #fff,
    698px 1040px #fff, 390px 1306px #fff, 790px 1917px #fff, 246px 818px #fff,
    382px 423px #fff, 1995px 1536px #fff, 209px 1761px #fff, 1487px 1265px #fff,
    227px 296px #fff, 558px 1520px #fff, 541px 1567px #fff, 845px 35px #fff,
    1528px 347px #fff, 1944px 704px #fff, 1551px 314px #fff, 86px 1887px #fff,
    930px 1656px #fff, 773px 1727px #fff, 295px 1359px #fff, 376px 631px #fff,
    607px 377px #fff, 453px 13px #fff, 63px 941px #fff, 86px 788px #fff,
    1094px 1980px #fff, 1133px 755px #fff, 381px 1312px #fff, 1766px 938px #fff,
    306px 671px #fff, 1766px 661px #fff, 1362px 1676px #fff, 1298px 1391px #fff,
    1263px 1637px #fff, 1266px 105px #fff, 1846px 1314px #fff, 1317px 647px #fff,
    1852px 668px #fff, 183px 1964px #fff, 1597px 907px #fff, 365px 1412px #fff,
    251px 763px #fff, 1779px 1319px #fff, 1268px 1462px #fff, 172px 1368px #fff,
    310px 1514px #fff, 79px 1072px #fff, 1864px 182px #fff, 1564px 1763px #fff,
    1458px 1857px #fff, 1360px 44px #fff, 693px 1080px #fff, 260px 1304px #fff,
    1719px 801px #fff, 427px 1766px #fff, 1237px 143px #fff, 1975px 251px #fff,
    254px 1467px #fff, 106px 1644px #fff, 1484px 1078px #fff, 378px 1430px #fff,
    1902px 553px #fff, 919px 148px #fff, 658px 1700px #fff, 1562px 310px #fff,
    926px 1534px #fff, 764px 75px #fff, 1922px 349px #fff, 824px 1523px #fff,
    1148px 399px #fff, 1123px 1785px #fff, 259px 305px #fff, 821px 1875px #fff,
    1566px 1982px #fff, 644px 911px #fff, 1396px 318px #fff, 468px 370px #fff,
    977px 1798px #fff, 792px 1123px #fff, 189px 937px #fff, 1996px 820px #fff,
    201px 498px #fff, 1743px 1977px #fff, 1107px 1641px #fff, 179px 1585px #fff,
    912px 842px #fff, 1013px 812px #fff, 1764px 487px #fff, 757px 1066px #fff,
    377px 691px #fff, 627px 1848px #fff, 1903px 1821px #fff, 637px 169px #fff,
    1547px 541px #fff, 79px 1555px #fff, 35px 364px #fff, 294px 1569px #fff,
    1353px 1747px #fff, 510px 1941px #fff, 1032px 1958px #fff, 105px 130px #fff,
    575px 302px #fff, 219px 995px #fff, 1370px 1887px #fff, 1061px 218px #fff,
    1742px 1904px #fff, 1561px 1277px #fff, 202px 370px #fff, 1482px 1155px #fff,
    832px 1093px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1951px 1760px #fff, 559px 862px #fff, 1836px 216px #fff,
    1833px 1032px #fff, 956px 1022px #fff, 1984px 1650px #fff,
    1364px 1848px #fff, 1655px 501px #fff, 1826px 1267px #fff,
    1437px 1674px #fff, 1797px 1952px #fff, 709px 475px #fff, 184px 564px #fff,
    1664px 693px #fff, 1813px 114px #fff, 476px 1420px #fff, 1373px 1483px #fff,
    1816px 222px #fff, 728px 1448px #fff, 690px 1684px #fff, 1188px 1303px #fff,
    1987px 908px #fff, 721px 780px #fff, 536px 1683px #fff, 394px 1347px #fff,
    1662px 1269px #fff, 1594px 513px #fff, 275px 112px #fff, 524px 176px #fff,
    1879px 1862px #fff, 622px 1439px #fff, 492px 1817px #fff, 4px 956px #fff,
    1680px 403px #fff, 971px 546px #fff, 16px 253px #fff, 859px 1926px #fff,
    1903px 1795px #fff, 522px 1205px #fff, 1197px 223px #fff, 531px 1210px #fff,
    1568px 1535px #fff, 496px 1911px #fff, 1462px 213px #fff, 1927px 325px #fff,
    206px 1489px #fff, 2px 673px #fff, 1479px 1017px #fff, 309px 1130px #fff,
    1504px 1528px #fff, 711px 286px #fff, 335px 1458px #fff, 1922px 691px #fff,
    381px 325px #fff, 1087px 1135px #fff, 40px 1066px #fff, 603px 1010px #fff,
    987px 1392px #fff, 1047px 1647px #fff, 328px 730px #fff, 1452px 504px #fff,
    1587px 1025px #fff, 28px 710px #fff, 1720px 518px #fff, 753px 1618px #fff,
    508px 1096px #fff, 1781px 1227px #fff, 1555px 73px #fff, 1400px 1717px #fff,
    1652px 229px #fff, 1792px 1159px #fff, 1737px 1616px #fff,
    1046px 1104px #fff, 1365px 615px #fff, 1306px 134px #fff, 563px 764px #fff,
    368px 285px #fff, 659px 743px #fff, 1148px 1564px #fff, 1749px 447px #fff,
    91px 1461px #fff, 1905px 1160px #fff, 322px 1742px #fff, 1745px 927px #fff,
    1614px 796px #fff, 836px 1364px #fff, 669px 620px #fff, 112px 773px #fff,
    719px 1319px #fff, 982px 1411px #fff, 1740px 1796px #fff, 42px 1746px #fff,
    1609px 1682px #fff, 1569px 632px #fff, 349px 336px #fff, 251px 1794px #fff,
    1487px 1018px #fff, 156px 1900px #fff, 263px 1616px #fff, 1874px 632px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1951px 1760px #fff, 559px 862px #fff, 1836px 216px #fff,
    1833px 1032px #fff, 956px 1022px #fff, 1984px 1650px #fff,
    1364px 1848px #fff, 1655px 501px #fff, 1826px 1267px #fff,
    1437px 1674px #fff, 1797px 1952px #fff, 709px 475px #fff, 184px 564px #fff,
    1664px 693px #fff, 1813px 114px #fff, 476px 1420px #fff, 1373px 1483px #fff,
    1816px 222px #fff, 728px 1448px #fff, 690px 1684px #fff, 1188px 1303px #fff,
    1987px 908px #fff, 721px 780px #fff, 536px 1683px #fff, 394px 1347px #fff,
    1662px 1269px #fff, 1594px 513px #fff, 275px 112px #fff, 524px 176px #fff,
    1879px 1862px #fff, 622px 1439px #fff, 492px 1817px #fff, 4px 956px #fff,
    1680px 403px #fff, 971px 546px #fff, 16px 253px #fff, 859px 1926px #fff,
    1903px 1795px #fff, 522px 1205px #fff, 1197px 223px #fff, 531px 1210px #fff,
    1568px 1535px #fff, 496px 1911px #fff, 1462px 213px #fff, 1927px 325px #fff,
    206px 1489px #fff, 2px 673px #fff, 1479px 1017px #fff, 309px 1130px #fff,
    1504px 1528px #fff, 711px 286px #fff, 335px 1458px #fff, 1922px 691px #fff,
    381px 325px #fff, 1087px 1135px #fff, 40px 1066px #fff, 603px 1010px #fff,
    987px 1392px #fff, 1047px 1647px #fff, 328px 730px #fff, 1452px 504px #fff,
    1587px 1025px #fff, 28px 710px #fff, 1720px 518px #fff, 753px 1618px #fff,
    508px 1096px #fff, 1781px 1227px #fff, 1555px 73px #fff, 1400px 1717px #fff,
    1652px 229px #fff, 1792px 1159px #fff, 1737px 1616px #fff,
    1046px 1104px #fff, 1365px 615px #fff, 1306px 134px #fff, 563px 764px #fff,
    368px 285px #fff, 659px 743px #fff, 1148px 1564px #fff, 1749px 447px #fff,
    91px 1461px #fff, 1905px 1160px #fff, 322px 1742px #fff, 1745px 927px #fff,
    1614px 796px #fff, 836px 1364px #fff, 669px 620px #fff, 112px 773px #fff,
    719px 1319px #fff, 982px 1411px #fff, 1740px 1796px #fff, 42px 1746px #fff,
    1609px 1682px #fff, 1569px 632px #fff, 349px 336px #fff, 251px 1794px #fff,
    1487px 1018px #fff, 156px 1900px #fff, 263px 1616px #fff, 1874px 632px #fff;
}

html {
  position: fixed;
  height: 100%;
  width: 100%;
  font-family: "lato", sans-serif;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #0c1116 0%, #090a0f 100%);
}

#horizon {
  position: absolute;
  width: 160%;
  height: 70%;
  border-radius: 100%/100%;
  background: #038bff;
  -webkit-filter: blur(30px);
  left: 50%;
  bottom: -20%;
  margin-left: -80%;
}
#horizon:before {
  content: " ";
  position: absolute;
  width: 81.25%;
  height: 70%;
  border-radius: 100%/100%;
  background: #51afff;
  -webkit-filter: blur(30px);
  opacity: 0.6;
  margin-left: 9.375%;
}
#horizon:after {
  content: " ";
  position: absolute;
  width: 32%;
  height: 20%;
  border-radius: 650px/350px;
  background: #b0daff;
  -webkit-filter: blur(30px);
  opacity: 0.5;
  margin-left: 34%;
}
#horizon .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%/100%;
  background: #215496;
  -webkit-filter: blur(200px);
  opacity: 0.7;
  top: -10%;
}

#earth {
  position: absolute;
  width: 200%;
  height: 100%;
  background: #070707d6;
  border-radius: 100%/100%;
  left: 50%;
  bottom: -50%;
  margin-left: -100%;
}

#title {
  position: absolute;
  font-weight: 250;
  top: 36%;
  left: 0;
  right: 0;
  margin-top: -80px;
  font-size: 100px;
  text-align: center;

  padding-left: 20px;

  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: animGravity;
  background: -webkit-linear-gradient(#fff, #9f9d9d, #fff, #9f9d9d, #fff);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 8px rgba(255, 255, 255, 1);
}

#subtitle {
  position: absolute;
  font-weight: 300;
  top: 70%;
  left: 0;
  right: 0;
  font-size: 25px;
  text-align: center;
  letter-spacing: 6px;
}
#subtitle span {
  color: #d8d8d8;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
#subtitle span:nth-child(1) {
  animation-name: animDont;
}
#subtitle span:nth-child(2) {
  animation-name: animLet;
}
#subtitle span:nth-child(3) {
  animation-name: animGo;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
@keyframes animGravity {
  0% {
    transform: translateY(-26px);
    opacity: 0;
  }
  30%,
  80% {
    padding-left: 40px;
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    letter-spacing: 25px;
    padding-left: 35px;
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animDont {
  0%,
  15% {
    transform: translateY(-26px);
    opacity: 0;
  }
  35%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animLet {
  0%,
  25% {
    transform: translateY(-26px);
    opacity: 0;
  }
  45%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animGo {
  0%,
  35% {
    transform: translateY(-26px);
    opacity: 0;
  }
  55%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
</style>
