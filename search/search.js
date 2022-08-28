// Search functionality

let data = [
    {

        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/214/8620496094_1_1_1.jpg?ts=1661158301350",
        title: "PRINTED MIDI DRESS",
        price: " 4,990.00 ",
        dis: "Off-the-shoulder midi dress with a straight-cut neckline. Draped fabric. Invisible side zip fastening.",
        color: "RED / WHITE | 8620/496",
        images: [

            "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_6_1_1.jpg?ts=1660903750770",
            "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_6_3_1.jpg?ts=1660903752356",
            "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_2_1_1.jpg?ts=1661158300856",
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_1_1_1.jpg?ts=1659355163146",
        title: "DRAPED DRESS",
        price: "2,990.00",
        dis: "Short dress with a straight neckline and exposed shoulders. Draped metallic fabric. Invisible side zip fastening.",
        color: "GOLDEN | 8129/384",
        images: [

            "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_2_1_1.jpg?ts=1659355164881",
            "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_2_4_1.jpg?ts=1659355162384",
            "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/2/w/750/8129384303_6_1_1.jpg?ts=1658411398005"
        ]

    },

    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/4786/058/620/12/w/750/4786058620_1_1_1.jpg?ts=1654761396463",
        title: "PRINTED MINI DRESS",
        price: " 2,990.00",
        dis: "Short collared dress with long sleeves and elastic trims. Contrast belt detail. Ruffled hem. Fastens at the front with buttons.",
        color: "PINK | 4786/058",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/4786/058/620/12/w/750/4786058620_2_1_1.jpg?ts=1654761394174",
            "https://static.zara.net/photos///2022/V/0/1/p/4786/135/620/2/w/1440/4786135620_6_1_1.jpg?ts=1650621824894",
            "https://static.zara.net/photos///2022/V/0/1/p/4786/135/620/2/w/1440/4786135620_6_3_1.jpg?ts=1650621825341"
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/7969/239/529/2/w/750/7969239529_1_1_1.jpg?ts=1660303507475",
        title: "MIDI DRESS WITH GATHERED DETAIL",
        price: "4,990.00",
        dis: "Midi dress with a surplice neckline and long sleeves. Gathered details at the front and slit at the hem. Invisible back zip fastening.",
        color: "DARK GREEN | 7969/239",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/7969/239/529/2/w/750/7969239529_1_1_1.jpg?ts=1660303507475",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/5216/045/400/2/w/750/5216045400_2_3_1.jpg?ts=1655285962427",
        title: "PRINTED MIDI DRESS",
        price: "4,990.00",
        dis: "Printed collared dress featuring long sleeves with elastic trim. Side in-seam pockets. Tied belt in the same fabric. Button-up front.",
        color: "BLUE | 5216/045",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/5216/045/400/2/w/750/5216045400_1_1_1.jpg?ts=1655285962846",
            "https://static.zara.net/photos///2022/I/0/1/p/5216/045/400/2/w/1440/5216045400_2_4_1.jpg?ts=1655285962922",
            "https://static.zara.net/photos///2022/V/0/1/p/5216/045/400/2/w/1440/5216045400_6_3_1.jpg?ts=1644324730026"
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/1971/172/098/2/w/750/1971172098_1_1_1.jpg?ts=1660721863051",
        title: "PRINTED DRESS WITH BELT",
        price: "4,990.00",
        dis: "Collared midi dress with long sleeves and a V-neckline. Belt detail with golden buckle. Front slit at the hem. Invisible side zip fastening.",
        color: "GREEN / ECRU | 1971/172",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/1971/172/098/2/w/750/1971172098_2_1_1.jpg?ts=1660721863406",
            "https://static.zara.net/photos///2022/I/0/1/p/1971/172/098/2/w/750/1971172098_2_2_1.jpg?ts=1660721863442",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/7631/044/330/2/w/750/7631044330_1_1_1.jpg?ts=1657190085834",
        title: "PRINTED DRESS WITH CUT-OUT DETAIL",
        price: "6,990.00",
        dis: "V-neck dress made of viscose with long puff sleeves, side slits and an invisible back zip fastening.",
        color: "MULTICOLOURED | 7631/044",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/7631/044/330/2/w/750/7631044330_2_11_1.jpg?ts=1657204352979",
            "https://static.zara.net/photos///2022/I/0/1/p/7631/044/330/2/w/750/7631044330_2_12_1.jpg?ts=1657204340787",
            "https://static.zara.net/photos///2022/I/0/1/p/7631/044/330/2/w/750/7631044330_2_13_1.jpg?ts=1657204343758"
        ]

    },
    {
        type: "dress",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/4886/242/305/17/w/750/4886242305_1_1_1.jpg?ts=1657643516665",
        title: "LINEN BLEND TUNIC DRESS",
        price: "4,990.00",
        dis: "Tunic dress made of a linen blend. Featuring a V-neck, short sleeves and front pleat detail.",
        color: "MUSTARD | 4886/242",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/4886/242/305/17/w/750/4886242305_2_1_1.jpg?ts=1657643526716",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
            "https://static.zara.net/photos///2022/I/0/1/p/4886/242/305/2/w/1440/4886242305_6_3_1.jpg?ts=1655374124448"
        ]

    },
    {
        type: "dress",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/7545/405/400/2/w/1440/7545405400_1_1_1.jpg?ts=1661256152177",
        title: "STRETCH SHIRT",
        price: "2,990.00",
        dis: "Slim fit shirt made of a high-stretch fabric. Spread collar and long sleeves with buttoned cuffs. Button-up front.",
        color: "BLUE | 7545/405",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/7545/405/400/2/w/862/7545405400_2_1_1.jpg?ts=1661256151300",
            "https://static.zara.net/photos///2022/I/0/1/p/7545/405/400/2/w/862/7545405400_2_3_1.jpg?ts=1661256153147",
            "https://static.zara.net/photos///2022/I/0/1/p/7545/405/400/2/w/862/7545405400_2_4_1.jpg?ts=1661256153509"
        ]

    },
    {
        type: "dress",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/2553/321/800/2/w/862/2553321800_1_1_1.jpg?ts=1657729037380",
        title: "RELAXED FIT DENIM TROUSERS",
        price: " 4,990.00",
        dis: "Relaxed fit trousers featuring front pockets, rear patch pockets and zip fly and top button fastening.",
        color: "BLACK | 2553/321",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/2553/321/800/2/w/862/2553321800_2_2_1.jpg?ts=1657611254207",
            "https://static.zara.net/photos///2022/I/0/1/p/2553/321/800/2/w/862/2553321800_2_3_1.jpg?ts=1657611251277",
            "https://static.zara.net/photos///2022/I/0/1/p/2553/321/800/2/w/862/2553321800_2_4_1.jpg?ts=1657611252178"
        ]

    },
    {
        type: "dress",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/5916/775/800/2/w/862/5916775800_1_1_1.jpg?ts=1660215658959",
        title: "SUIT TROUSERS",
        price: "4,990.00",
        dis: "Straight fit trousers with front pleat detail. Featuring front pockets, rear welt pockets and zip fly and top button",
        color: "BLACK | 5916/775",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/5916/775/800/2/w/862/5916775800_2_3_1.jpg?ts=1660215653240",
            "https://static.zara.net/photos///2022/I/0/2/p/5916/775/800/2/w/862/5916775800_2_5_1.jpg?ts=1660215654363",
            "https://static.zara.net/photos///2022/I/0/2/p/5916/775/800/2/w/862/5916775800_6_3_1.jpg?ts=1660909450617"
        ]

    }, {
        type: "dress",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/5821/530/606/2/w/1440/5821530606_1_1_1.jpg?ts=1661334287624",
        title: "TEXTURED SUIT TROUSERS",
        price: "2,990.00",
        dis: "Slim fit trousers with front pockets and rear jetted pockets. Featuring turn-up hems and zip fly and top",
        color: "BURGUNDY | 4023/530",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/5821/530/606/2/w/841/5821530606_2_3_1.jpg?ts=1661334283095",
            "https://static.zara.net/photos///2022/I/0/2/p/5821/530/606/2/w/841/5821530606_2_4_1.jpg?ts=1661334288236",
            "https://static.zara.net/photos///2022/I/0/2/p/5821/530/606/2/w/841/5821530606_6_1_1.jpg?ts=1661255055501"
        ]

    }, {
        type: "dress",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/5692/446/605/2/w/563/5692446605_1_1_1.jpg?ts=1659446905592",
        title: "LEAF PRINT SHIRT",
        price: " 2,990.00",
        dis: "Regular fit shirt with a camp collar, short sleeves and a button-up front.",
        color: "MAROON | 5692/446",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/5692/446/605/2/w/563/5692446605_2_1_1.jpg?ts=1659446906148",
            "https://static.zara.net/photos///2022/I/0/2/p/5692/446/605/2/w/563/5692446605_2_2_1.jpg?ts=1659446904909",
            "https://static.zara.net/photos///2022/I/0/2/p/5692/446/605/2/w/563/5692446605_2_5_1.jpg?ts=1659446906506"
        ]

    }, {
        type: "dress",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/6208/706/712/102/w/563/6208706712_1_1_1.jpg?ts=1661330141790",
        title: "VARSITY DRESS WITH POLO COLLAR AND FLOCKED DETAIL",
        price: "1,990.00",
        dis: "Plush polo-style dress featuring a contrast collar, long sleeves with cuffs and flocked detail on the front.",
        color: "ECRU | 6208/706",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/6208/706/712/102/w/563/6208706712_1_1_1.jpg?ts=1661330141790",
            "https://static.zara.net/photos///2022/I/0/3/p/6208/706/712/2/w/563/6208706712_6_1_1.jpg?ts=1660229264123",
            "https://static.zara.net/photos///2022/I/0/3/p/6208/706/712/2/w/563/6208706712_6_3_1.jpg?ts=1660229265225"
        ]

    }, {
        type: "dress",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/2674/718/703/102/w/563/2674718703_1_1_1.jpg?ts=1661331833392",
        title: "FLORAL DRESS",
        price: " 2,490.00",
        dis: "Dress featuring a slot collar and long sleeves with elasticated trims. Button fastening on the chest. Seam details. All-over print.",
        color: "OCHRE | 2674/718",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/2674/718/703/102/w/563/2674718703_1_1_1.jpg?ts=1661331833392",
            "https://static.zara.net/photos///2022/I/0/3/p/2674/721/703/2/w/563/2674721703_6_1_1.jpg?ts=1660732524446",
            "https://static.zara.net/photos///2022/I/0/3/p/2674/721/703/2/w/563/2674721703_6_3_1.jpg?ts=1660732531900"
        ]

    },
    {
        type: "dress",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/6268/167/500/202/w/563/6268167500_1_1_1.jpg?ts=1661157810975",
        title: "FLORAL TULLE DRESS",
        price: "2,290.00",
        dis: "Round neck dress featuring short sleeves with elastic trim. Button fastening at the back. Rhinestone details.",
        color: "GREEN | 6268/167",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/6268/167/500/202/w/563/6268167500_1_1_1.jpg?ts=1661157810975",
            "https://static.zara.net/photos///2022/I/0/3/p/6268/167/500/2/w/563/6268167500_6_1_1.jpg?ts=1659611130458",
            "https://static.zara.net/photos///2022/I/0/3/p/6268/167/500/2/w/563/6268167500_6_3_1.jpg?ts=1659611143715"
        ]

    },
    {
        type: "dress",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/2903/700/405/2/w/563/2903700405_6_1_1.jpg?ts=1659515722149",
        title: "TEXTURED DRESS WITH EMBROIDERY",
        price: "2,790.00",
        dis: "Textured V-neck dress featuring long sleeves with elastic trim and embroidered motifs on the chest.",
        color: "INDIGO | 2903/700",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/2903/700/405/2/w/563/2903700405_6_1_1.jpg?ts=1659515722149",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
            "https://static.zara.net/photos///2022/I/0/3/p/2903/700/405/2/w/563/2903700405_6_3_1.jpg?ts=1659008540631"
        ]

    },
    {
        type: "dress",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/3182/703/250/311/w/563/3182703250_1_1_1.jpg?ts=1661164901880",
        title: "TEXTURED SHIRT",
        price: " 1,690.00",
        dis: "Collared shirt with long sleeves and a button-up front.",
        color: "WHITE | 3182/703",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/3182/703/250/311/w/563/3182703250_1_1_1.jpg?ts=1661164901880",
            "https://static.zara.net/photos///2022/I/0/3/p/6159/021/250/2/w/563/6159021250_6_1_1.jpg?ts=1654069886253",
            "https://static.zara.net/photos///2022/I/0/3/p/6159/021/250/2/w/563/6159021250_6_3_1.jpg?ts=1654069887292"
        ]

    },
    {
        type: "shirts",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/V/0/3/p/2402/608/500/102/w/563/2402608500_1_1_1.jpg?ts=1651565602125",
        title: "SWISS-EMBROIDERED SHIRT WITH CUT-OUT DETAIL",
        price: "1,990.00",
        dis: "Cropped collared shirt with short sleeves. Button-up front. Cut-out detail on the back. Embroidered motifs.",
        color: "GREEN | 2402/608",
        images: [
            "https://static.zara.net/photos///2022/V/0/3/p/2402/608/500/102/w/563/2402608500_1_1_1.jpg?ts=1651565602125",
            "https://static.zara.net/photos///2022/V/0/3/p/2402/608/500/2/w/563/2402608500_6_1_1.jpg?ts=1651131265627",
            "https://static.zara.net/photos///2022/V/0/3/p/2402/608/500/2/w/563/2402608500_6_3_1.jpg?ts=1651131268022"
        ]

    },
    {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/2/w/563/1934244800_1_1_1.jpg?ts=1659693546670",
        title: "ZW THE MARINE STRAIGHT JEANS",
        price: " 2,990.00",
        dis: "Slim Fit - Relaxed Leg - High Rise - Power Stretch FabricZW ZARA WOMAN JEANS",
        color: "BLACK | 1934/244",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/2/w/563/1934244800_1_1_1.jpg?ts=1659693546670",
            "https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/2/w/563/1934244800_2_2_1.jpg?ts=1659693547547",
            "https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/2/w/563/1934244800_2_3_1.jpg?ts=1659693547210"
        ]

    },
    {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8197/279/800/4/w/563/8197279800_2_1_1.jpg?ts=1661358193628",
        title: "DENIM CROPPED JACKET",
        price: " 2,990.00",
        dis: "Jacket featuring a lapel collar and long sleeves with cuffs. Front patch pockets with flaps. Metal button fastening on the front.",
        color: "BLACK | 8197/279",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/8197/279/800/4/w/563/8197279800_2_1_1.jpg?ts=1661358193628",
            "https://static.zara.net/photos///2022/I/0/1/p/8197/279/800/2/w/563/8197279800_6_1_1.jpg?ts=1661437004902",
            "https://static.zara.net/photos///2022/I/0/1/p/8197/279/800/2/w/563/8197279800_6_3_1.jpg?ts=1661437005934"
        ]

    }, {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8197/209/400/2/w/563/8197209400_1_1_1.jpg?ts=1660218575769",
        title: "CARGO JEANS WITH SPLIT HEMS",
        price: " 3,990.00",
        dis: "Mid-rise trousers with patch pockets on the sides and on the leg and false flap pockets on the back. Side vents at the hem. Front zip fly and metal button fastening.",
        color: "BLUE | 8197/209",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/8197/209/400/2/w/563/8197209400_1_1_1.jpg?ts=1660218575769",
            "https://static.zara.net/photos///2022/I/0/1/p/8197/209/400/2/w/563/8197209400_2_1_1.jpg?ts=1660218587510",
            "https://static.zara.net/photos///2022/I/0/1/p/8197/209/400/2/w/563/8197209400_2_2_1.jpg?ts=1660218561754"
        ]

    }, {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8197/257/406/2/w/563/8197257406_1_1_1.jpg?ts=1657874800771",
        title: "FULL LENGTH DENIM JUMPSUIT WITH CUT-OUT DETAIL",
        price: " 4,990.00",
        dis: "Sleeveless collared jumpsuit. Patch pockets on the chest, back and sides. Cut-out details at the waist. Zip fly and metal button fastening.",
        color: "LIGHT BLUE | 8197/257",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/8197/257/406/2/w/563/8197257406_1_1_1.jpg?ts=1657874800771",
            "https://static.zara.net/photos///2022/I/0/1/p/8197/257/406/2/w/563/8197257406_2_1_1.jpg?ts=1657874815917",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"
        ]

    }, {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/6929/200/406/3/w/563/6929200406_1_1_1.jpg?ts=1661362115072",
        title: "DENIM SHIRT",
        price: " 2,890.00",
        dis: "Collared shirt with cuffed long sleeves. Patch pockets on the front. Metallic button-up fastening.",
        color: "LIGHT BLUE | 6929/200",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/6929/200/406/3/w/563/6929200406_2_1_1.jpg?ts=1661351446188",
            "https://static.zara.net/photos///2022/I/0/1/p/6929/200/406/3/w/563/6929200406_2_3_1.jpg?ts=1661362115055",
            "https://static.zara.net/photos///2022/I/0/1/p/6929/200/406/3/w/563/6929200406_2_5_1.jpg?ts=1661362117757"
        ]

    }, {
        type: "jeans",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/6147/162/427/2/w/563/6147162427_1_1_1.jpg?ts=1660291338932",
        title: "Z1975 HIGH-RISE STRAIGHT-FIT LONG-LENGTH JEANS",
        price: "2,990.00",
        dis: "High-waist jeans with five pockets. Faded effect. Straight and long leg. Front zip fly and metallic button fastening.",
        color: "MID-BLUE | 6147/162",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/6147/162/427/2/w/563/6147162427_1_1_1.jpg?ts=1660291338932",
            "https://static.zara.net/photos///2022/I/0/1/p/6147/162/427/2/w/563/6147162427_2_2_1.jpg?ts=1660291344294",
            "https://static.zara.net/photos///2022/I/0/1/p/6147/162/427/2/w/563/6147162427_2_3_1.jpg?ts=1660291342357"
        ]

    }, {
        type: "jeans",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8727/410/800/2/w/563/8727410800_1_1_1.jpg?ts=1657611789641",
        title: "STRAIGHT FIT JEANS",
        price: "",
        dis: "Straight fit jeans with five pockets. Faded effect. Front button fastening.",
        color: "BLACK | 8727/410",
        images: [
            "https://static.zara.net/photos///2022/I/0/1/p/8727/410/800/2/w/563/8727410800_1_1_1.jpg?ts=1657611789641",
            "https://static.zara.net/photos///2022/I/0/2/p/8727/410/800/2/w/563/8727410800_2_2_1.jpg?ts=1657721564792",
            "https://static.zara.net/photos///2022/I/0/2/p/8727/410/800/2/w/803/8727410800_6_3_1.jpg?ts=1657619433097"
        ]

    }, {
        type: "jeans",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/5575/440/400/2/w/563/5575440400_1_1_1.jpg?ts=1657721530573",
        title: "BASIC SLIM FIT JEANS",
        price: "2,490.00",
        dis: "Faded slim fit jeans with five pockets. Front zip fly and top button fastening.",
        color: "BLUE | 5575/440",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/5575/440/400/2/w/563/5575440400_1_1_1.jpg?ts=1657721530573",
            "https://static.zara.net/photos///2022/I/0/2/p/5575/440/400/2/w/563/5575440400_2_1_1.jpg?ts=1657721596463",
            "https://static.zara.net/photos///2022/I/0/2/p/5575/440/400/2/w/803/5575440400_2_4_1.jpg?ts=1657721596130"
        ]

    }, {
        type: "jeans",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/8062/360/707/2/w/563/8062360707_1_1_1.jpg?ts=1658477552374",
        title: "SKINNY FIT JEANS",
        price: " 2,990.00",
        dis: "Skinny fit jeans. Five pockets. Faded and ripped effect on the legs. Front zip fly and button fastening.",
        color: "CAMEL | 8062/360",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/8062/360/707/2/w/563/8062360707_1_1_1.jpg?ts=1658477552374",
            "https://static.zara.net/photos///2022/I/0/2/p/8062/360/707/2/w/563/8062360707_2_2_1.jpg?ts=1658477552563",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"
        ]

    }, {
        type: "jeans",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/563/8727410712_1_1_1.jpg?ts=1657721620641",
        title: "STRAIGHT FIT JEANS",
        price: "2,990.00",
        dis: "Straight fit jeans with five pockets. Faded effect. Front button fastening.",
        color: "ECRU | 8727/410",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/563/8727410712_1_1_1.jpg?ts=1657721620641",
            "https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/563/8727410712_2_1_1.jpg?ts=1657721616521",
            "https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/563/8727410712_2_3_1.jpg?ts=1657721548061"
        ]

    }, {
        type: "jeans",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/0/2/p/6917/375/505/2/w/563/6917375505_1_1_1.jpg?ts=1660209726065",
        title: "SLIM-FIT COLOURED JEANS",
        price: "2,990.00",
        dis: "Slim-fit jeans. Five pockets. Faded effect. Button-up front.",
        color: "KHAKI | 6917/375",
        images: [
            "https://static.zara.net/photos///2022/I/0/2/p/6917/375/505/2/w/563/6917375505_1_1_1.jpg?ts=1660209726065",
            "https://static.zara.net/photos///2022/I/0/1/p/6917/375/505/2/w/563/6917375505_2_1_1.jpg?ts=1659694249353",
            "https://static.zara.net/photos///2022/I/0/1/p/6917/375/505/2/w/563/6917375505_2_2_1.jpg?ts=1659694248220"
        ]

    }, {
        type: "jeans",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/6840/690/427/2/w/563/6840690427_6_1_1.jpg?ts=1661181567737",
        title: "RELAXED FIT CROPPED JEANS",
        price: "1,990.00",
        dis: "Five-pocket cropped jeans with an adjustable inner waistband and front button fastening. Featuring ripped details. Snap-button fastening on size 6.",
        color: "MID-BLUE | 6840/690",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/6840/690/427/2/w/563/6840690427_6_1_1.jpg?ts=1661181567737",
            "https://static.zara.net/photos///2022/V/0/3/p/6840/690/427/2/w/563/6840690427_6_2_1.jpg?ts=1650614125151",
            "https://static.zara.net/photos///2022/V/0/3/p/6840/690/427/2/w/563/6840690427_6_3_1.jpg?ts=1650614091583"
        ]

    }, {
        type: "jeans",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/6917/704/671/2/w/563/6917704671_6_1_1.jpg?ts=1661328144273",
        title: "MARINE COLOURED JEANS",
        price: " 1,990.00",
        dis: "Marine fit jeans with an adjustable inner waistband and front button fastening. Front and rear patch pockets.",
        color: "RASPBERRY | 2553/719",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/6917/704/671/2/w/563/6917704671_6_1_1.jpg?ts=1661328144273",
            "https://static.zara.net/photos///2022/I/0/3/p/6917/704/671/2/w/563/6917704671_6_2_1.jpg?ts=1661328144043",
            "https://static.zara.net/photos///2022/I/0/3/p/6917/704/671/2/w/803/6917704671_6_3_1.jpg?ts=1661328144857"
        ]

    }, {
        type: "jeans",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/1213/765/703/2/w/563/1213765703_6_1_1.jpg?ts=1659625766422",
        title: "BALLOON FIT JEANS",
        price: "1,790.00",
        dis: "Five-pocket balloon-fit jeans with an adjustable waistband and top button fastening. Snap-button fastening on size 6.",
        color: "OCHRE | 1213/765",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/1213/765/703/2/w/563/1213765703_6_1_1.jpg?ts=1659625766422",
            "https://static.zara.net/photos///2022/I/0/3/p/1213/765/703/2/w/563/1213765703_6_2_1.jpg?ts=1659625737722",
            "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833"
        ]

    }, {
        type: "jeans",
        for: "kids",
        poster: "https://static.zara.net/photos///2022/I/0/3/p/4743/762/400/2/w/563/4743762400_6_1_1.jpg?ts=1659008519119",
        title: "RIPPED SKINNY JEANS",
        price: "1,990.00",
        dis: "Jeans with an adjustable inner waistband and front button fastening. Featuring ripped details and five pockets. Snap-button on size 6.",
        color: "BLUE | 4743/762",
        images: [
            "https://static.zara.net/photos///2022/I/0/3/p/4743/762/400/2/w/563/4743762400_6_1_1.jpg?ts=1659008519119",
            "https://static.zara.net/photos///2022/I/0/3/p/4743/762/400/2/w/803/4743762400_6_2_1.jpg?ts=1659008517656",
            "https://static.zara.net/photos///2022/I/0/3/p/4743/762/400/2/w/803/4743762400_6_3_1.jpg?ts=1659008537099"
        ]

    }, {
        type: "shoes",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/2224/010/075/2/w/563/2224010075_6_1_1.jpg?ts=1659083327433",
        title: "EMBELLISHED VINYL HIGH-HEEL SHOES",
        price: "5,990.00",
        dis: "High-heel vinyl slingback shoes. Embellished detail with rhinestones on the front.",
        color: "BLUISH-PURPLE | 2232/910",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/2224/010/075/2/w/563/2224010075_1_1_1.jpg?ts=1659000311471",
            "https://static.zara.net/photos///2022/I/1/1/p/2224/010/075/2/w/563/2224010075_2_1_1.jpg?ts=1659000311817",
            "https://static.zara.net/photos///2022/I/1/1/p/2224/010/075/2/w/563/2224010075_2_3_1.jpg?ts=1659000313053"
        ]

    }, {
        type: "shoes",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/3209/010/081/2/w/108/3209010081_6_1_1.jpg?ts=1661327356710",
        title: "LACE UP HIGH-HEEL SHOES",
        price: "2,990.00",
        dis: "High-heel slingback shoes. Tied straps at the ankle. Pointed toe.",
        color: "LILAC | 3209/010",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/3209/010/081/2/w/803/3209010081_1_1_1.jpg?ts=1660039200160",
            "https://static.zara.net/photos///2022/I/1/1/p/3209/010/081/2/w/563/3209010081_2_1_1.jpg?ts=1660039199403",
            "https://static.zara.net/photos///2022/I/1/1/p/3209/010/081/2/3209010081_16_1_1/w/563/poster.jpg?ts=1661412233272"
        ]

    }, {
        type: "shoes",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/2216/010/040/2/w/803/2216010040_6_2_1.jpg?ts=1661325655241",
        title: "HIGH-HEEL SLINGBACK SHOES",
        price: "3,990.00",
        dis: "Slingback high-heels in a combination of materials. Pointed toe. Metallic heel.",
        color: "BLACK | 2216/010",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/2216/010/040/2/w/563/2216010040_1_1_1.jpg?ts=1661419120852",
            "https://static.zara.net/photos///2022/I/1/1/p/2216/010/040/2/w/563/2216010040_2_1_1.jpg?ts=1661419120906",
            "https://static.zara.net/photos///2022/I/1/1/p/2216/010/040/2/w/803/2216010040_6_2_1.jpg?ts=1661325655241"
        ]

    }, {
        type: "shoes",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/2232/910/111/2/w/563/2232910111_1_1_1.jpg?ts=1656326609979",
        title: "EMBELLISHED VINYL HIGH-HEEL SHOES",
        price: "5,990.00",
        dis: "High-heel vinyl slingback shoes. Embellished detail with rhinestones on the front.",
        color: "NATURAL | 2232/910",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/2232/910/111/2/w/563/2232910111_1_1_1.jpg?ts=1656326609979",
            "https://static.zara.net/photos///2022/I/1/1/p/2232/910/111/2/w/563/2232910111_2_1_1.jpg?ts=1656326609551",
            "https://static.zara.net/photos///2022/V/1/1/p/2232/910/111/2/w/563/2232910111_6_1_1.jpg?ts=1646236158806"
        ]

    }, {
        type: "shoes",
        for: "women",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/2337/010/202/2/w/563/2337010202_6_1_1.jpg?ts=1660203162578",
        title: "PRINTED PLATFORM SANDALS",
        price: "5,990.00",
        dis: "Printed platform sandals. Thin criss-cross straps on the front. Buckled ankle strap fastening. High block heel.",
        color: "MULTICOLOURED | 2337/010",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/2337/010/202/2/w/563/2337010202_1_1_1.jpg?ts=1660039202060",
            "https://static.zara.net/photos///2022/I/1/1/p/2337/010/202/2/w/563/2337010202_2_1_1.jpg?ts=1660039206390",
            "https://static.zara.net/photos///2022/I/1/1/p/2337/010/202/2/w/563/2337010202_6_1_1.jpg?ts=1660203162578"
        ]

    }, {
        type: "shoes",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/1/1/p/2509/920/100/33/w/563/2509920100_1_1_1.jpg?ts=1661174941713",
        title: "LEATHER CASUAL SHOES",
        price: "6,990.00",
        dis: "Sporty shoes made of leather with a split suede finish. Moc toe with matching seams. Two-eyelet facing. Decorative welt detail around the entire shoe. Brown track sole. Rounded toe.",
        color: "BROWN | 2509/920",
        images: [
            "https://static.zara.net/photos///2022/I/1/1/p/2509/920/100/33/w/563/2509920100_1_1_1.jpg?ts=1661174941713",
            "https://static.zara.net/photos///2022/I/1/2/p/2509/920/100/2/w/563/2509920100_6_1_1.jpg?ts=1659701375550",
            "https://static.zara.net/photos///2022/I/1/2/p/2509/920/100/2/w/563/2509920100_6_2_1.jpg?ts=1659701375769"
        ]

    }, {
        type: "shoes",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_2_1.jpg?ts=1661241652897",
        title: "LEATHER MONK SHOES",
        price: " 6,990.00",
        dis: "Brown leather monk shoes. Fastening with two metal buckles. Leather insole. Semi-pointed toe. Brown sole.",
        color: "BROWN | 2426/920",
        images: [
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_1_1.jpg?ts=1657102833906",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_2_1.jpg?ts=1657102835857",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_3_1.jpg?ts=1661241653488"
        ]

    },
    {
        type: "shoes",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_2_1.jpg?ts=1661241652897",
        title: "LEATHER MONK SHOES",
        price: " 6,990.00",
        dis: "Brown leather monk shoes. Fastening with two metal buckles. Leather insole. Semi-pointed toe. Brown sole.",
        color: "BROWN | 2426/920",
        images: [
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_1_1.jpg?ts=1657102833906",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_2_1.jpg?ts=1657102835857",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_3_1.jpg?ts=1661241653488"
        ]

    }, {
        type: "shoes",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_2_1.jpg?ts=1661241652897",
        title: "LEATHER MONK SHOES",
        price: " 6,990.00",
        dis: "Brown leather monk shoes. Fastening with two metal buckles. Leather insole. Semi-pointed toe. Brown sole.",
        color: "BROWN | 2426/920",
        images: [
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_1_1.jpg?ts=1657102833906",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_2_1.jpg?ts=1657102835857",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_3_1.jpg?ts=1661241653488"
        ]

    }, {
        type: "shoes",
        for: "man",
        poster: "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_2_1.jpg?ts=1661241652897",
        title: "LEATHER MONK SHOES",
        price: " 6,990.00",
        dis: "Brown leather monk shoes. Fastening with two metal buckles. Leather insole. Semi-pointed toe. Brown sole.",
        color: "BROWN | 2426/920",
        images: [
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_1_1.jpg?ts=1657102833906",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_2_2_1.jpg?ts=1657102835857",
            "https://static.zara.net/photos///2022/I/1/2/p/2426/920/105/2/w/563/2426920105_6_3_1.jpg?ts=1661241653488"
        ]

    },
]


document.querySelector("#dress").addEventListener("click", function () {
    Show(data, "dress")
    console.log(data)

});
document.querySelector("#top").addEventListener("click", function () {
    Show(data, "dress")
    console.log(data)

});
document.querySelector("#jeans").addEventListener("click", function () {
    Show(data, "jeans")
    console.log(data)

});
document.querySelector("#shoes").addEventListener("click", function () {
    Show(data, "shoes")
    console.log(data)

});

document.getElementById("women").addEventListener("click", function () {
    For = "women"
    filter_women(filtered_Data)

});
document.getElementById("men").addEventListener("click", function () {
    For = "man"
    filter_men(filtered_Data)

});

document.getElementById("kid").addEventListener("click", function () {
    For = "kids"
    filter_kid(filtered_Data)

});

let For = "women"
let filtered_Data = []

let query = document.getElementById("search").value;

function Show(data, type) {
    event.preventDefault();
    document.getElementById("trends").style.display = "none"

    data.forEach((el) => {
        if (el.type == type) {
            filtered_Data.push(el);
        }
    });

    filter(filtered_Data);

    console.log("filtered_Data :", filtered_Data)


}


function filter(filtered_Data) {
    document.getElementById("main").innerHTML = null;
    filtered_Data.forEach((el) => {


        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.poster;
        image.addEventListener("click", function () {
            shop(el)
        })

        let title = document.createElement("p");
        title = el.title;

        let price = document.createElement("p");
        price.innerText = `₹${el.price}`

        box.append(image, title, price);
        document.getElementById("main").append(box);
    })

}


function search(event) {
    let search_data = [];
    document.getElementById("trends").style.display = "none"
    if (event.keyCode == 13) {

        let x = document.getElementById("search").value;
        console.log(x)
        data.forEach(function (el) {

            if (x == el.type && el.for == For) {
                search_data.push(el)
            }
        });
        filter(search_data);
    }

}

function shop(el) {
    localStorage.setItem("shop", JSON.stringify(el))
    window.location.href = "shop.html"

}

function cross() {
    window.location.reload()
}



function filter_women(data) {
    let women_data = []

    data.forEach((el) => {

        if (el.for === "women") {
            women_data.push(el)
        }

    });
    filter(women_data)
    console.log(women_data)
}



function filter_men(data) {
    let men_data = []
    data.forEach((el) => {

        if (el.for === "man") {
            men_data.push(el)
        }

    });
    filter(men_data)

}


function filter_kid(data) {
    let kid_data = []
    data.forEach((el) => {

        if (el.for === "kids") {
            kid_data.push(el)
        }

    });
    filter(kid_data)

}




