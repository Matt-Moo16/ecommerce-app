import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

const brandData = [
  {
    img: "https://media.dior.com/couture/ecommerce/media/catalog/product/B/N/1644248550_023M550AT099_C087_E01_ZH.jpg",
    brandTitle: "Dior",
    itemName: "Dior Oblique Overshirt",
  },
  {
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multiple-wallet-monogram-macassar-canvas-small-leather-goods--M81537_PM2_Front%20view.png?wid=1080&hei=1080",
    brandTitle: "Louis Vuitton",
    itemName: "Multiple Wallet",
  },
  {
    img: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1657549870/706921_XJERY_4330_001_100_0000_Light-Gucci-Lovelight-cotton-jersey-sweater.jpg",
    brandTitle: "Gucci",
    itemName: "Gucci Lovelight Cotton Jersy Sweater",
  },
  {
    img: "https://saint-laurent.dam.kering.com/m/32b46c903aeb5a4d/Small-689402Y36LO9582_A.jpg?v=2",
    brandTitle: "Saint Laurent",
    itemName: `"Saint Laurent" T-Shirt`,
  },
  {
    img: "https://twicpics.celine.com/product-prd/images/large/194502CIM.38NO_1_FALL20_822460v1.jpg?twic=v1/cover=1:1/resize-max=720",
    brandTitle: "Celine",
    itemName: "Medium Messenger Bag in Triomphe Canvas With Celine Print",
  },
  {
    img: "https://balenciaga.dam.kering.com/m/374aad485b8e4aaa/Large-673319410B21099_F.jpg?v=1",
    brandTitle: "Balenciaga",
    itemName: "Logo Front Cap Glow in the Dark",
  },
  {
    img: "https://www.prada.com/content/dam/pradabkg_products/S/SGN/SGN889/U43F0SVF/SGN889_U43_F0SVF_S_182_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.800.jpg",
    brandTitle: "Prada",
    itemName: "Technical-poplin Jacket",
  },
  {
    img: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcd1d4393/images/large/637709303647994656-2182247.png?sw=750&sh=750&sm=fit&sfrm=png",
    brandTitle: "Cartier",
    itemName: "Tank Must Watch",
  },
];

const FeaturedBrands = () => {
  return (
    <div
      style={{
        marginTop: "65px",
        backgroundColor: "#DFE0DF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Crimson Text",
          marginLeft: "10px",
          alignSelf: "flex-start",
        }}
      >
        Men's Vintage Designer
      </Typography>
      <ImageList
        sx={{ width: "100%", height: "600px", justifyContent: "flex-end" }}
        cols={4}
        rows={2}
        variant="masonry"
      >
        {brandData.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{ marginTop: "25px", marginLeft: "10px" }}
          >
            <img
              src={`${item.img}`}
              alt={item.itemName}
              loading="lazy"
              style={{ height: "250px", width: "250px" }}
            />
            <ImageListItemBar
              title={item.brandTitle}
              sx={{ fontFamily: "Crimson Text", fontSize: "20px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Crimson Text",
          marginRight: "10px",
          alignSelf: "flex-end",
        }}
      >
        At prices you can afford!{" "}
      </Typography>
    </div>
  );
};

export default FeaturedBrands;
