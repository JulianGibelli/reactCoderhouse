//BASE DE DATOS QUE SE EXPORTA PARA PODER SER LLAMADA POR PROMESA

const productos = [
  {
    id: 1,
    title: "Intel Celeron G5905",
    description: "Procesador Intel Celeron G5905 3.5GHz Socket 1200",
    price: 8100,    
    brand: "Intel",
    oferta: 50,
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21913_Procesador_Intel_Celeron_G5905_3.5GHz_Socket_1200_aa932e7b-med.jpg",
    
  },
  {
    id: 2,
    title: "Intel Celeron G4900",
    description:
      "Procesador Intel Celeron G4900 3.10GHz 1151 9th Gen OEM",
    price: 9920,   
    brand: "Intel",
    oferta: 30,
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29042_Procesador_Intel_Celeron_G4900_3.10GHz_1151_9th_Gen_OEM_509e62dd-med.jpg",
    
  },
  {
    id: 3,
    title: "Intel Pentium G6400",
    description:
      "Procesador Intel Pentium Gold G6400 4.0GHz Socket 1200",
    price: 12300,   
    brand: "Intel",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20026_Procesador_Intel_Pentium_Gold_G6400_4.0GHz_Socket_1200_1780cdf7-med.jpg",
    
  },
  {
    id: 4,
    title: "Intel Pentium G6900",
    description:
      "Procesador Intel Celeron G6900 S1700 12th Gen",
    price: 14250,   
    brand: "Intel",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31468_Procesador_Intel_Celeron_G6900_S1700_12th_Gen_84b12400-med.jpg",
    
  },
  {
    id: 5,
    title: "Intel Core I3 10100F",
    description:
      "Procesador Intel Core i3 10100F 4.3GHz Turbo 1200 Comet Lake",
    price: 18300,   
    brand: "Intel",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23223_Procesador_Intel_Core_i3_10100F_4.3GHz_Turbo_1200_Comet_Lake_6ea64940-med.jpg",
    
  },
  {
    id: 6,
    title: "Intel Core I3 12100",
    description:
      "Procesador Intel Core i3 12100 12th Gen S1700",
    price: 34650,   
    brand: "Intel",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31717_Procesador_Intel_Core_i3_12100_12th_Gen_S1700_28683e1f-med.jpg",
    
  },
  {
    id: 7,
    title: "Intel Core I5 10400F",
    description:
      "Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",
    price: 34900,   
    brand: "Intel",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18900_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_e07a1d28-med.jpg",
    
  },
  {
    id: 8,
    title: "AMD Ryzen 3 4100",
    description:
      "Procesador AMD Ryzen 3 4100 Sin cooler OEM",
    price: 18400,   
    brand: "AMD",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32737_Procesador_AMD_Ryzen_3_4100_Sin_cooler_OEM_d6ef51fc-med.jpg",
    
  },
  {
    id: 9,
    title: "AMD Ryzen 5 4500",
    description:
      "Procesador AMD Ryzen 5 4500 + Wraith Stealth Cooler AM4",
    price: 30250,   
    brand: "AMD",
    category: "procesadores",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32727_Procesador_AMD_Ryzen_5_4500___Wraith_Stealth_Cooler_AM4_2e8c3c7b-med.jpg",
    
  },
  {
    id: 10,
    title: "Placa de video GeForce G210",
    description:
      "Placa de Video GeForce MSI G210 1GB DDR3 Low Profile",
    price: 9940,   
    brand: "GeForce",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26735_Placa_de_Video_GeForce_MSI_G210_1GB_DDR3_Low_Profile_c07b4910-med.jpg",
    
  },
  {
    id: 11,
    title: "Placa de video GeForce GTX 1660",
    description:
      "Placa de Video Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan",
    price: 95650,   
    brand: "GeForce",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34999_Placa_de_Video_Zotac_GeForce_GTX_1660_6GB_GDDR5_Dual_Fan_fcf6db06-med.jpg",
    
  },
  {
    id: 12,
    title: "Placa de video GeForce GTX SUPER 1660",
    description:
      "Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan",
    price: 97900,   
    brand: "GeForce",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35144_Placa_de_Video_Zotac_GeForce_GTX_1660_SUPER_6GB_GDDR6_Twin_Fan_b62628e1-med.jpg",
    
  },
  {
    id: 13,
    title: "Placa de video GeForce RTX 3050",
    description:
      "Placa de Video GALAX GeForce RTX 3050 8GB GDDR6",
    price: 105900,   
    brand: "GeForce",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35145_Placa_de_Video_GALAX_GeForce_RTX_3050_8GB_GDDR6_404d5e76-med.jpg",
    
  },
  {
    id: 14,
    title: "Placa de video GeForce MSI RTX 3080 TI",
    description:
      "Placa de Video MSI GeForce RTX 3080 Ti 12GB GDDR6X SUPRIM X",
    price: 400000,   
    brand: "GeForce",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35142_Placa_de_Video_MSI_GeForce_RTX_3080_Ti_12GB_GDDR6X_SUPRIM_X_5724f97e-med.jpg",
    
  },
  {
    id: 15,
    title: "Placa de video Asrock RX 570",
    description:
      "Placa de Video Asrock RX 570 8GB GDDR5 Phantom Gaming Elite",
    price: 62500,   
    brand: "Radeon",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28822_Placa_de_Video_Asrock_RX_570_8GB_GDDR5_Phantom_Gaming_Elite_9ecf3ec5-med.jpg",
    
  },
  {
    id: 16,
    title: "Placa de video XFX Radeon RX 6500",
    description:
      "Placa de Video XFX Radeon RX 6500 XT Black 4GB GDDR6 Speedster QICK210",
    price: 67700,   
    brand: "Radeon",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30405_Placa_de_Video_XFX_Radeon_RX_6500_XT_Black_4GB_GDDR6_Speedster_QICK210_3f969d9e-med.jpg",
    
  },
  {
    id: 17,
    title: "Placa de video Powercolor Radeon RX 6600",
    description:
      "Placa de Video PowerColor Radeon RX 6600 8GB GDDR6 FIGHTER",
    price: 94250,   
    brand: "Radeon",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29077_Placa_de_Video_PowerColor_Radeon_RX_6600_8GB_GDDR6_FIGHTER_96e7f502-med.jpg",
    
  },
  {
    id: 18,
    title: "Placa de video Asrock Radeon RX 6700",
    description:
      "Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6 Challenger",
    price: 130100,   
    brand: "Radeon",
    category: "placasvideo",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26063_Placa_de_Video_Asrock_Radeon_RX_6700_XT_12GB_GDDR6_Challenger_04633e80-med.jpg",
    
  },
  {
    id: 19,
    title: "Mouse ASUS ROG",
    description:
      "Mouse ASUS ROG STRIX Evolve RGB Ambidiestro y Modular",
    price: 9750,   
    brand: "Asus",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23203_Mouse_ASUS_ROG_STRIX_Evolve_RGB_Ambidiestro_y_Modular_99814b07-med.jpg",
    
  },
  {
    id: 20,
    title: "Mouse Logitech G903",
    description:
      "Mouse Logitech G903 Lightspeed Wireless Gaming 16.000dpi",
    price: 19950,   
    brand: "Logitech",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9807_Mouse_Logitech_G903_Lightspeed_Wireless_Gaming_16.000dpi_86c5e07e-med.jpg",
    
  },
  {
    id: 21,
    title: "Mouse Redragon Mirage M690",
    description:
      "Mouse Redragon Mirage M690 2.5GHz Wireless",
    price: 3100,   
    brand: "Redragon",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8760_Mouse_Redragon_Mirage_M690_2.5GHz_Wireless_1739dc55-med.jpg",
    
  },
  {
    id: 22,
    title: "Mouse HP HyperX Pulsefire",
    description:
      "Mouse HP HyperX Pulsefire Surge RGB 16.000DPI",
    price: 99450,   
    brand: "HyperX",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30994_Mouse_HP_HyperX_Pulsefire_Surge_RGB_16.000DPI_12744384-med.jpg",
    
  },
  {
    id: 23,
    title: "Auriculares HyperX Cloud Flight",
    description:
      "Auriculares HyperX Cloud Flight Black Wireless",
    price: 23650,   
    brand: "HyperX",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30990_Auriculares_HyperX_Cloud_Flight_Black_Wireless_ee2bc8f7-med.jpg",
    
  },
  {
    id: 24,
    title: "Auriculares HyperX Cloud Revolver",
    description:
      "Auriculares HyperX Cloud Revolver 7.1",
    price: 23450,   
    brand: "HyperX",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30992_Auriculares_HyperX_Cloud_Revolver_7.1_3dd11be0-med.jpg",
    
  },
  {
    id: 25,
    title: "Auriculares LOgitech H151",
    description:
      "Auriculares Logitech H151 PC STEREO",
    price: 3310,   
    brand: "Logitech",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_4421_Auriculares_Logitech_H151_PC_STEREO_daf4e845-med.jpg",
    
  },  
  {
    id: 26,
    title: "Teclado Redragon K509",
    description:
      "Teclado Redragon K509 Dyaus Español Retroiluminado 7 Colores",
    price: 5000,   
    brand: "Redragon",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33398_Teclado_Redragon_K509_Dyaus_Espa__ol_Retroiluminado_7_Colores_8b303511-med.jpg",
    
  },
  {
    id: 27,
    title: "Teclado Redragon Shiva K512",
    description:
      "Teclado Redragon Shiva K512 White RGB Español",
    price: 6550,   
    brand: "Redragon",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28592_Teclado_Redragon_Shiva_K512_White_RGB_Espa__ol_28459d4e-med.jpg",
    
  },
  {
    id: 28,
    title: "Teclado HP HyperX Alloy",
    description:
      "Teclado HP HyperX Alloy CORE RGB LA",
    price: 8500,   
    brand: "HyperX",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26222_Teclado_HP_HyperX_Alloy_CORE_RGB_LA_dd3acd58-med.jpg",
    
  },
  {
    id: 29,
    title: "Teclado Redragon Kumara K552",
    description:
      "Teclado Mecanico Redragon Kumara K552-KR White Rainbow Outemu RED ESP",
    price: 8800,   
    brand: "Redragon",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29800_Teclado_Mecanico_Redragon_Kumara_K552-KR_White_Rainbow_Outemu_RED_ESP_cd947367-med.jpg",
    
  },
  {
    id: 30,
    title: "Teclado Logitech K835",
    description:
      "Teclado Mecanico Logitech K835 TKL Switch Blue",
    price: 10950,   
    brand: "Logitech",
    category: "perifericos",
    thumbnail: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34843_Teclado_Mecanico_Logitech_K835_TKL_Switch_Blue_3fcbc6e8-med.jpg",
    
  },
  
  
];

export default productos