document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const body = document.body;

    // --- Dicionário de Traduções ---
    const translations = {
        'pt-BR': {
            // Navegação
            logo_text: 'Peru',
            nav_home: 'Início',
            nav_about: 'Sobre',
            nav_tourism: 'Turismo',
            nav_culture: 'Cultura',
            nav_economy: 'Economia',
            nav_contact: 'Contato',
            // Menu de Configurações
            settings_button_title: 'Configurações',
            settings_title: 'Configurações',
            setting_dark_mode: 'Modo Noturno',
            setting_increase_font: 'Aumentar Fonte',
            setting_high_contrast: 'Alto Contraste',
            setting_mute_sounds: 'Silenciar Sons',
            setting_peru_language: 'Idioma es-PE', // Rótulo atualizado no dicionário
            // Página Inicial (index.html)
            hero_title: 'Conheça o Peru',
            hero_subtitle: 'Um país rico em história, cultura e belezas naturais.',
            hero_button: 'Saiba Mais',
            highlights_title: 'Conheça o Peru',
            card_culture_title: 'Cultura Vibrante',
            card_culture_text: 'Mergulhe nos festivais, músicas e danças que contam a história de um povo.',
            card_culture_button: 'Ver Cultura',
            card_tourism_title: 'Destinos Incríveis',
            card_tourism_text: 'De Machu Picchu às Linhas de Nazca, o Peru oferece paisagens inesquecíveis.',
            card_tourism_button: 'Ver Turismo',
            card_economy_title: 'Economia e Curiosidades',
            card_economy_text: 'Conheça os setores que movem o país e fatos fascinantes sobre o Peru.',
            card_economy_button: 'Ver Economia',
            // Rodapé
            footer_copyright: '&copy; 2025 EvoTech. Todos os direitos reservados.',
            instagram_feed_title: '#VisitEvoTech no Instagram',
            // Contato (contato.html)
            contact_title: 'Entre em Contato',
            contact_description: 'Tem alguma dúvida, sugestão ou gostaria de saber mais sobre o Peru? Preencha o formulário abaixo e entraremos em contato o mais breve possível.',
            form_name_label: 'Nome:',
            form_name_placeholder: 'Seu nome completo',
            form_email_label: 'Email:',
            form_email_placeholder: 'seu.email@exemplo.com',
            form_subject_label: 'Assunto:',
            form_subject_placeholder: 'Assunto da mensagem',
            form_message_label: 'Mensagem:',
            form_message_placeholder: 'Escreva sua mensagem aqui...',
            form_submit_button: 'Enviar Mensagem',
            // Cultura (cultura.html)
            culture_intro_title: 'Cultura Vibrante do Peru',
            culture_intro_text: 'A cultura peruana é um mosaico fascinante de tradições ancestrais, influências coloniais e uma rica diversidade étnica. Mergulhe nos festivais coloridos, na música envolvente, nas danças expressivas e na culinária que é Patrimônio Cultural da Humanidade.',
            festivals_title: 'Festivais e Tradições',
            festivals_text: 'O calendário peruano é repleto de celebrações que refletem a profunda espiritualidade e alegria do seu povo:',
            festival_inti_raymi_strong: 'Inti Raymi:',
            festival_inti_raymi_text: 'A Festa do Sol, uma recriação espetacular da antiga cerimônia inca em Cusco.',
            festival_carnival_strong: 'Carnaval:',
            festival_carnival_text: 'Celebrado com água, talco, danças e música em diversas regiões.',
            festival_lord_miracles_strong: 'Senhor dos Milagres:',
            festival_lord_miracles_text: 'Uma das maiores procissões religiosas da América do Sul, em Lima.',
            festival_virgin_candelaria_strong: 'Virgem da Candelária:',
            festival_virgin_candelaria_text: 'Grande festa religiosa e cultural em Puno, com danças e trajes típicos.',
            music_dance_title: 'Música e Dança',
            music_dance_text: 'A música e a dança são expressões vitais da identidade peruana, com ritmos e estilos variados:',
            music_marinera_strong: 'Marinera:',
            music_marinera_text: 'Elegante dança de cortejo, considerada a dança nacional do Peru.',
            music_huayno_strong: 'Huayno:',
            music_huayno_text: 'Gênero musical andino com raízes indígenas, popular nas terras altas.',
            music_festejo_strong: 'Festejo:',
            music_festejo_text: 'Ritmo afro-peruano vibrante e alegre, com percussão e sapateado.',
            music_sicuris_strong: 'Sicuris:',
            music_sicuris_text: 'Música tocada com flautas de Pã (sikus) em grupos, típica do altiplano.',
            gastronomy_title: 'Gastronomia Peruana',
            gastronomy_text: 'Reconhecida mundialmente, a culinária do Peru é uma fusão de sabores e técnicas milenare:',
            gastronomy_ceviche_strong: 'Ceviche:',
            gastronomy_ceviche_text: 'Peixe fresco marinado em limão, cebola roxa e pimenta, prato bandeira do Peru.',
            gastronomy_lomo_saltado_strong: 'Lomo Saltado:',
            gastronomy_lomo_saltado_text: 'Tiras de carne salteadas com cebola, tomate, batata frita e arroz.',
            gastronomy_pisco_sour_strong: 'Pisco Sour:',
            gastronomy_pisco_sour_text: 'Coquetel nacional, feito com pisco, limão, clara de ovo e angostura.',
            gastronomy_suspiro_limena_strong: 'Suspiro a la Limeña:',
            gastronomy_suspiro_limena_text: 'Doce cremoso à base de leite condensado e merengue.',
            gastronomy_aji_gallina_strong: 'Ají de Gallina:',
            gastronomy_aji_gallina_text: 'Frango desfiado em um molho cremoso de ají amarillo, pão e nozes.',
            gastronomy_chicha_morada_strong: 'Chicha Morada:',
            gastronomy_chicha_morada_text: 'Bebida refrescante de milho roxo, frutas e especiarias.',
            gastronomy_filter_all: 'Todos',
            gastronomy_filter_main_dishes: 'Pratos Principais',
            gastronomy_filter_drinks: 'Bebidas',
            gastronomy_filter_desserts: 'Sobremesas',
            crafts_title: 'Artesanato e Têxteis',
            crafts_text: 'O artesanato peruano é uma herança de técnicas pré-colombianas e coloniais, com destaque para os têxteis:',
            crafts_textiles_strong: 'Têxteis Andinos:',
            crafts_textiles_text: 'Lãs de alpaca e lhama transformadas em ponchos, mantas e chullos (gorros).',
            crafts_ceramics_strong: 'Cerâmica de Chulucanas:',
            crafts_ceramics_text: 'Famosa por suas peças de argila com desenhos geométricos e cores vibrantes.',
            crafts_retablos_strong: 'Retablos Ayacuchuanos:',
            crafts_retablos_text: 'Caixas de madeira com miniaturas que representam cenas religiosas ou cotidianas.',
            crafts_silver_strong: 'Prata:',
            crafts_silver_text: 'Joias e objetos decorativos em prata, com designs inspirados na iconografia inca.',
            // Economia (economia.html)
            economy_intro_title: 'Economia do Peru: Crescimento e Diversidade',
            economy_intro_text: 'A economia peruana tem demonstrado um crescimento robusto nas últimas décadas, impulsionada por seus vastos recursos naturais e uma crescente diversificação. Conheça os pilares que sustentam o desenvolvimento do país.',
            economy_sectors_title: 'Setores Econômicos Chave',
            economy_sectors_text: 'Os principais motores da economia peruana incluem:',
            economy_mining_strong: 'Mineração:',
            economy_mining_text: 'O Peru é um dos maiores produtores mundiais de cobre, ouro, zinco e prata.',
            economy_agriculture_strong: 'Agricultura:',
            economy_agriculture_text: 'Produção de café, quinoa, aspargos, frutas e vegetais, com destaque para produtos de exportação.',
            economy_fishing_strong: 'Pesca:',
            economy_fishing_text: 'Rico em recursos marinhos, o Peru é um grande produtor de farinha e óleo de peixe, além de pescado para consumo humano.',
            economy_tourism_strong: 'Turismo:',
            economy_tourism_text: 'Um setor em constante crescimento, atraindo milhões de visitantes anualmente para seus sítios arqueológicos, belezas naturais e cultura.',
            economy_manufacturing_strong: 'Manufatura:',
            economy_manufacturing_text: 'Indústrias têxtil, de alimentos e bebidas, e de produtos químicos.',
            economy_exports_title: 'Produtos de Exportação',
            economy_exports_text: 'Os principais produtos que o Peru exporta para o mundo são:',
            economy_exports_minerals_strong: 'Minerais:',
            economy_exports_minerals_text: 'Cobre, ouro, zinco, chumbo, prata.',
            economy_exports_agricultural_strong: 'Produtos Agrícolas:',
            economy_exports_agricultural_text: 'Café, quinoa, aspargos, uvas, abacates, mirtilos.',
            economy_exports_fishing_strong: 'Produtos Pesqueiros:',
            economy_exports_fishing_text: 'Farinha de peixe, óleo de peixe, lulas, vieiras.',
            economy_exports_textiles_strong: 'Têxteis:',
            economy_exports_textiles_text: 'Produtos de algodão Pima e lã de alpaca.',
            economy_trade_industry_title: 'Comércio e Indústria',
            economy_trade_industry_text: 'O Peru tem buscado expandir suas relações comerciais e modernizar sua indústria:',
            economy_trade_agreements_strong: 'Acordos de Livre Comércio:',
            economy_trade_agreements_text: 'O Peru possui acordos com diversos países e blocos econômicos, facilitando o comércio internacional.',
            economy_foreign_investment_strong: 'Investimento Estrangeiro:',
            economy_foreign_investment_text: 'O país tem atraído investimentos em setores como mineração, energia e infraestrutura.',
            economy_smes_strong: 'Pequenas e Médias Empresas (PMEs):',
            economy_smes_text: 'Contribuem significativamente para a geração de empregos e o desenvolvimento local.',
            economy_curiosities_title: 'Curiosidades sobre o Peru',
            economy_curiosities_text: 'Além de sua economia, o Peru é repleto de fatos interessantes:',
            economy_indigenous_languages_strong: 'Línguas Indígenas:',
            economy_indigenous_languages_text: 'Além do espanhol, o Quechua e o Aymara são línguas oficiais e amplamente faladas.',
            economy_biodiversity_strong: 'Biodiversidade:',
            economy_biodiversity_text: 'O Peru é um dos países megadiversos do mundo, abrigando uma enorme variedade de espécies de flora e fauna.',
            economy_unesco_heritage_strong: 'Patrimônios da UNESCO:',
            economy_unesco_heritage_text: 'Possui 13 Patrimônios Mundiais da UNESCO, incluindo Machu Picchu, o Centro Histórico de Cusco e as Linhas de Nazca.',
            economy_potato_birthplace_strong: 'Berço da Batata:',
            economy_potato_birthplace_text: 'A batata é originária dos Andes peruanos, com milhares de variedades cultivadas.',
            // Turismo (turismo.html)
            tourism_intro_title: 'Turismo no Peru: Uma Aventura Inesquecível',
            tourism_intro_text: 'O Peru é um destino que cativa viajantes de todo o mundo com sua mistura única de história antiga, paisagens deslumbrantes e uma cultura vibrante. Prepare-se para explorar ruínas misteriosas, cidades coloniais charmosas e maravilhas naturais.',
            tourism_destinations_title: 'Principais Destinos',
            tourism_destinations_text: 'Descubra os lugares imperdíveis que fazem do Peru um dos destinos mais procurados da América do Sul:',
            tourism_machu_picchu_strong: 'Machu Picchu:',
            tourism_machu_picchu_text: 'A cidadela inca perdida, uma das Sete Maravilhas do Mundo Moderno.',
            tourism_cusco_strong: 'Cusco:',
            tourism_cusco_text: 'A antiga capital do Império Inca, repleta de história e arquitetura colonial.',
            tourism_lake_titicaca_strong: 'Lago Titicaca:',
            tourism_lake_titicaca_text: 'O lago navegável mais alto do mundo, lar das ilhas flutuantes de Uros.',
            tourism_lima_strong: 'Lima:',
            tourism_lima_text: 'A capital gastronômica da América do Sul, com uma rica história e vida noturna agitada.',
            tourism_arequipa_strong: 'Arequipa:',
            tourism_arequipa_text: 'A "Cidade Branca", famosa por sua arquitetura de sillar e o majestoso Cânion do Colca.',
            tourism_nazca_lines_strong: 'Linhas de Nazca:',
            tourism_nazca_lines_text: 'Enigmáticos geoglifos desenhados no deserto, visíveis apenas do alto.',
            tourism_sacred_valley_strong: 'Vale Sagrado dos Incas:',
            tourism_sacred_valley_text: 'Um vale fértil entre Cusco e Machu Picchu, com sítios arqueológicos e vilarejos tradicionais.',
            tourism_gallery_title: 'Galeria de Imagens',
            tourism_gallery_text: 'Inspire-se com algumas das belezas do Peru:',
            gallery_machu_picchu: 'Machu Picchu',
            gallery_cusco: 'Cusco',
            gallery_lake_titicaca: 'Lago Titicaca',
            gallery_lima: 'Lima',
            gallery_arequipa: 'Arequipa',
            gallery_nazca_lines: 'Linhas de Nazca',
        },
        'es-PE': { // "Linguagem do Peru" - usando espanhol peruano como exemplo
            // Navegação
            logo_text: 'Perú',
            nav_home: 'Inicio',
            nav_about: 'Acerca de',
            nav_tourism: 'Turismo',
            nav_culture: 'Cultura',
            nav_economy: 'Economía',
            nav_contact: 'Contacto',
            // Menu de Configurações
            settings_button_title: 'Configuración',
            settings_title: 'Configuración',
            setting_dark_mode: 'Modo Oscuro',
            setting_increase_font: 'Aumentar Fuente',
            setting_high_contrast: 'Alto Contraste',
            setting_mute_sounds: 'Silenciar Sonidos',
            setting_peru_language: 'Idioma es-PE', // Rótulo atualizado no dicionário
            // Página Inicial (index.html)
            hero_title: 'Conoce Perú',
            hero_subtitle: 'Un país rico en historia, cultura y bellezas naturales.',
            hero_button: 'Saber Más',
            highlights_title: 'Conoce Perú',
            card_culture_title: 'Cultura Vibrante',
            card_culture_text: 'Sumérgete en los festivales, músicas y danzas que cuentan la historia de un pueblo.',
            card_culture_button: 'Ver Cultura',
            card_tourism_title: 'Destinos Increíbles',
            card_tourism_text: 'Desde Machu Picchu hasta las Líneas de Nazca, Perú ofrece paisajes inolvidables.',
            card_tourism_button: 'Ver Turismo',
            card_economy_title: 'Economía y Curiosidades',
            card_economy_text: 'Conoce los sectores que mueven el país y datos fascinantes sobre Perú.',
            card_economy_button: 'Ver Economía',
            // Rodapé
            footer_copyright: '&copy; 2025 EvoTech. Todos los derechos reservados.',
            instagram_feed_title: '#VisitEvoTech en Instagram',
            // Contato (contato.html)
            contact_title: 'Contáctanos',
            contact_description: '¿Tienes alguna pregunta, sugerencia o te gustaría saber más sobre Perú? Completa el formulario a continuación y nos pondremos en contacto lo antes posible.',
            form_name_label: 'Nombre:',
            form_name_placeholder: 'Tu nombre completo',
            form_email_label: 'Correo electrónico:',
            form_email_placeholder: 'tu.correo@ejemplo.com',
            form_subject_label: 'Asunto:',
            form_subject_placeholder: 'Asunto del mensaje',
            form_message_label: 'Mensaje:',
            form_message_placeholder: 'Escribe tu mensaje aquí...',
            form_submit_button: 'Enviar Mensaje',
            // Cultura (cultura.html)
            culture_intro_title: 'Cultura Vibrante de Perú',
            culture_intro_text: 'La cultura peruana es un mosaico fascinante de tradiciones ancestrales, influencias coloniales y una rica diversidad étnica. Sumérgete en los festivales coloridos, la música envolvente, las danzas expresivas y la culinaria que es Patrimonio Cultural de la Humanidad.',
            festivals_title: 'Festivales y Tradiciones',
            festivals_text: 'El calendario peruano está lleno de celebraciones que reflejan la profunda espiritualidad y alegría de su gente:',
            festival_inti_raymi_strong: 'Inti Raymi:',
            festival_inti_raymi_text: 'La Fiesta del Sol, una recreación espectacular de la antigua ceremonia inca en Cusco.',
            festival_carnival_strong: 'Carnaval:',
            festival_carnival_text: 'Celebrado con agua, talco, danzas y música en diversas regiones.',
            festival_lord_miracles_strong: 'Señor de los Milagros:',
            festival_lord_miracles_text: 'Una de las procesiones religiosas más grandes de América del Sur, en Lima.',
            festival_virgin_candelaria_strong: 'Virgen de la Candelaria:',
            festival_virgin_candelaria_text: 'Gran fiesta religiosa y cultural en Puno, con danzas y trajes típicos.',
            music_dance_title: 'Música y Danza',
            music_dance_text: 'La música y la danza son expresiones vitales de la identidad peruana, con ritmos y estilos variados:',
            music_marinera_strong: 'Marinera:',
            music_marinera_text: 'Elegante danza de cortejo, considerada la danza nacional de Perú.',
            music_huayno_strong: 'Huayno:',
            music_huayno_text: 'Género musical andino con raíces indígenas, popular en las tierras altas.',
            music_festejo_strong: 'Festejo:',
            music_festejo_text: 'Ritmo afroperuano vibrante y alegre, con percusión y zapateado.',
            music_sicuris_strong: 'Sicuris:',
            music_sicuris_text: 'Música tocada con flautas de Pan (sikus) en grupos, típica del altiplano.',
            gastronomy_title: 'Gastronomía Peruana',
            gastronomy_text: 'Reconocida mundialmente, la culinaria de Perú es una fusión de sabores y técnicas milenarias:',
            gastronomy_ceviche_strong: 'Ceviche:',
            gastronomy_ceviche_text: 'Pescado fresco marinado en limón, cebolla morada y ají, plato bandera de Perú.',
            gastronomy_lomo_saltado_strong: 'Lomo Saltado:',
            gastronomy_lomo_saltado_text: 'Tiras de carne salteadas con cebolla, tomate, papas fritas y arroz.',
            gastronomy_pisco_sour_strong: 'Pisco Sour:',
            gastronomy_pisco_sour_text: 'Cóctel nacional, hecho con pisco, limón, clara de huevo y angostura.',
            gastronomy_suspiro_limena_strong: 'Suspiro a la Limeña:',
            gastronomy_suspiro_limena_text: 'Dulce cremoso a base de leche condensada y merengue.',
            gastronomy_aji_gallina_strong: 'Ají de Gallina:',
            gastronomy_aji_gallina_text: 'Pollo deshilachado en una salsa cremosa de ají amarillo, pan y nueces.',
            gastronomy_chicha_morada_strong: 'Chicha Morada:',
            gastronomy_chicha_morada_text: 'Bebida refrescante de maíz morado, frutas y especias.',
            gastronomy_filter_all: 'Todos',
            gastronomy_filter_main_dishes: 'Platos Principales',
            gastronomy_filter_drinks: 'Bebidas',
            gastronomy_filter_desserts: 'Postres',
            crafts_title: 'Artesanía y Textiles',
            crafts_text: 'La artesanía peruana es una herencia de técnicas precolombinas y coloniales, con énfasis en los textiles:',
            crafts_textiles_strong: 'Textiles Andinos:',
            crafts_textiles_text: 'Lanas de alpaca y llama transformadas en ponchos, mantas y chullos (gorros).',
            crafts_ceramics_strong: 'Cerámica de Chulucanas:',
            crafts_ceramics_text: 'Famosa por sus piezas de arcilla con diseños geométricos y colores vibrantes.',
            crafts_retablos_strong: 'Retablos Ayacuchanos:',
            crafts_retablos_text: 'Cajas de madera con miniaturas que representan escenas religiosas o cotidianas.',
            crafts_silver_strong: 'Plata:',
            crafts_silver_text: 'Joyas y objetos decorativos en plata, con diseños inspirados en la iconografía inca.',
            // Economia (economia.html)
            economy_intro_title: 'Economía de Perú: Crecimiento y Diversidad',
            economy_intro_text: 'La economía peruana ha demostrado un crecimiento robusto en las últimas décadas, impulsada por sus vastos recursos naturales y una creciente diversificación. Conoce los pilares que sustentan el desarrollo del país.',
            economy_sectors_title: 'Sectores Económicos Clave',
            economy_sectors_text: 'Los principales motores de la economía peruana incluyen:',
            economy_mining_strong: 'Minería:',
            economy_mining_text: 'Perú es uno de los mayores productores mundiales de cobre, oro, zinc y plata.',
            economy_agriculture_strong: 'Agricultura:',
            economy_agriculture_text: 'Producción de café, quinua, espárragos, frutas y verduras, con énfasis en productos de exportación.',
            economy_fishing_strong: 'Pesca:',
            economy_fishing_text: 'Rico en recursos marinos, Perú es un gran productor de harina y aceite de pescado, además de pescado para consumo humano.',
            economy_tourism_strong: 'Turismo:',
            economy_tourism_text: 'Un sector en constante crecimiento, atrayendo a millones de visitantes anualmente a sus sitios arqueológicos, bellezas naturales y cultura.',
            economy_manufacturing_strong: 'Manufactura:',
            economy_manufacturing_text: 'Industrias textil, de alimentos y bebidas, y de productos químicos.',
            economy_exports_title: 'Productos de Exportación',
            economy_exports_text: 'Los principales productos que Perú exporta al mundo son:',
            economy_exports_minerals_strong: 'Minerales:',
            economy_exports_minerals_text: 'Cobre, oro, zinc, plomo, plata.',
            economy_exports_agricultural_strong: 'Productos Agrícolas:',
            economy_exports_agricultural_text: 'Café, quinua, espárragos, uvas, aguacates, arándanos.',
            economy_exports_fishing_strong: 'Productos Pesqueros:',
            economy_exports_fishing_text: 'Harina de pescado, aceite de pescado, calamares, vieiras.',
            economy_exports_textiles_strong: 'Textiles:',
            economy_exports_textiles_text: 'Productos de algodón Pima y lana de alpaca.',
            economy_trade_industry_title: 'Comercio e Industria',
            economy_trade_industry_text: 'Perú ha buscado expandir sus relaciones comerciales y modernizar su industria:',
            economy_trade_agreements_strong: 'Acuerdos de Libre Comercio:',
            economy_trade_agreements_text: 'Perú tiene acuerdos con varios países y bloques económicos, facilitando el comercio internacional.',
            economy_foreign_investment_strong: 'Inversión Extranjera:',
            economy_foreign_investment_text: 'El país ha atraído inversiones en sectores como minería, energía e infraestructura.',
            economy_smes_strong: 'Pequenas y Medianas Empresas (PYMES):',
            economy_smes_text: 'Contribuyen significativamente a la generación de empleo y el desarrollo local.',
            economy_curiosities_title: 'Curiosidades sobre Perú',
            economy_curiosities_text: 'Además de su economía, Perú está lleno de datos interesantes:',
            economy_indigenous_languages_strong: 'Idiomas Indígenas:',
            economy_indigenous_languages_text: 'Además del español, el Quechua y el Aymara son idiomas oficiales y ampliamente hablados.',
            economy_biodiversity_strong: 'Biodiversidad:',
            economy_biodiversity_text: 'Perú es uno de los países megadiversos del mundo, albergando una enorme variedad de especies de flora y fauna.',
            economy_unesco_heritage_strong: 'Patrimonios de la UNESCO:',
            economy_unesco_heritage_text: 'Posee 13 Patrimonios Mundiales de la UNESCO, incluyendo Machu Picchu, el Centro Histórico de Cusco y las Líneas de Nazca.',
            economy_potato_birthplace_strong: 'Cuna de la Papa:',
            economy_potato_birthplace_text: 'La papa es originaria de los Andes peruanos, con miles de variedades cultivadas.',
            // Turismo (turismo.html)
            tourism_intro_title: 'Turismo en Perú: Una Aventura Inolvidable',
            tourism_intro_text: 'Perú es un destino que cautiva a viajeros de todo el mundo con su mezcla única de historia antigua, paisajes deslumbrantes y una cultura vibrante. Prepárate para explorar ruinas misteriosas, ciudades coloniales encantadoras y maravillas naturales.',
            tourism_destinations_title: 'Principales Destinos',
            tourism_destinations_text: 'Descubre los lugares imperdibles que hacen de Perú uno de los destinos más buscados de Sudamérica:',
            tourism_machu_picchu_strong: 'Machu Picchu:',
            tourism_machu_picchu_text: 'La ciudadela inca perdida, una de las Siete Maravillas del Mundo Moderno.',
            tourism_cusco_strong: 'Cusco:',
            tourism_cusco_text: 'La antigua capital del Imperio Inca, llena de historia y arquitectura colonial.',
            tourism_lake_titicaca_strong: 'Lago Titicaca:',
            tourism_lake_titicaca_text: 'El lago navegable más alto del mundo, hogar de las islas flotantes de Uros.',
            tourism_lima_strong: 'Lima:',
            tourism_lima_text: 'La capital gastronómica de Sudamérica, con una rica historia y vida nocturna animada.',
            tourism_arequipa_strong: 'Arequipa:',
            tourism_arequipa_text: 'La "Ciudad Blanca", famosa por su arquitectura de sillar y el majestuoso Cañón del Colca.',
            tourism_nazca_lines_strong: 'Líneas de Nazca:',
            tourism_nazca_lines_text: 'Enigmáticos geoglifos dibujados en el desierto, visibles solo desde arriba.',
            tourism_sacred_valley_strong: 'Valle Sagrado de los Incas:',
            tourism_sacred_valley_text: 'Un valle fértil entre Cusco y Machu Picchu, con sitios arqueológicos y pueblos tradicionales.',
            tourism_gallery_title: 'Galería de Imágenes',
            tourism_gallery_text: 'Inspírate con algunas de las bellezas de Perú:',
            gallery_machu_picchu: 'Machu Picchu',
            gallery_cusco: 'Cusco',
            gallery_lake_titicaca: 'Lago Titicaca',
            gallery_lima: 'Lima',
            gallery_arequipa: 'Arequipa',
            gallery_nazca_lines: 'Líneas de Nazca',
        }
    };

    function applyLanguage(lang) {
        // Traduzir textContent
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Traduzir atributos 'title'
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) {
                element.title = translations[lang][key];
            }
        });
        // Traduzir atributos 'placeholder'
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Atualizar o título da página
        const pageTitleElement = document.querySelector('title');
        if (pageTitleElement) {
            const currentPageFileName = window.location.pathname.split('/').pop();
            let titleKey;

            switch (currentPageFileName) {
                case 'index.html':
                case '': // Para o caso de ser a raiz do site
                    titleKey = 'hero_title';
                    break;
                case 'sobre.html':
                    titleKey = 'nav_about';
                    break;
                case 'turismo.html':
                    titleKey = 'tourism_intro_title';
                    break;
                case 'cultura.html':
                    titleKey = 'culture_intro_title';
                    break;
                case 'economia.html':
                    titleKey = 'economy_intro_title';
                    break;
                case 'contato.html':
                    titleKey = 'contact_title';
                    break;
                default:
                    titleKey = null;
            }

            if (titleKey && translations[lang] && translations[lang][titleKey]) {
                pageTitleElement.textContent = translations[lang][titleKey];
            }
        }
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add 'active' class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Basic form submission (for contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)');
            contactForm.reset();
        });
    }

    // --- Novas Funcionalidades e Melhorias ---

    // 1. Botão de Configurações e Menu
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');

    if (settingsBtn && settingsMenu) {
        settingsBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            settingsMenu.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
                settingsMenu.classList.remove('show');
            }
        });
    }

    // 2. Modo Claro/Escuro
    const darkModeToggleMenu = document.getElementById('dark-mode-toggle-menu');
    if (darkModeToggleMenu) {
        const currentMode = localStorage.getItem('theme');
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggleMenu.checked = true;
        }

        darkModeToggleMenu.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 3. Aumentar/Reduzir Fonte
    const increaseFontToggleMenu = document.getElementById('increase-font-toggle-menu');
    if (increaseFontToggleMenu) {
        const isLargeFont = localStorage.getItem('largeFont') === 'true';
        if (isLargeFont) {
            body.classList.add('large-font');
            increaseFontToggleMenu.checked = true;
        }

        increaseFontToggleMenu.addEventListener('change', () => {
            body.classList.toggle('large-font');
            localStorage.setItem('largeFont', body.classList.contains('large-font'));
        });
    }

    // 4. Alto Contraste
    const highContrastToggleMenu = document.getElementById('high-contrast-toggle-menu');
    if (highContrastToggleMenu) {
        const isHighContrast = localStorage.getItem('highContrast') === 'true';
        if (isHighContrast) {
            body.classList.add('high-contrast');
            highContrastToggleMenu.checked = true;
        }

        highContrastToggleMenu.addEventListener('change', () => {
            body.classList.toggle('high-contrast');
            localStorage.setItem('highContrast', body.classList.contains('high-contrast'));
        });
    }

    // 5. Silenciar Sons
    const muteSoundsToggleMenu = document.getElementById('mute-sounds-toggle-menu');
    const backgroundMusic = document.getElementById('background-music');

    if (muteSoundsToggleMenu) {
        const isMuted = localStorage.getItem('isMuted') === 'true';
        if (isMuted) {
            if (backgroundMusic) {
                backgroundMusic.muted = true;
            }
            muteSoundsToggleMenu.checked = true;
        }

        muteSoundsToggleMenu.addEventListener('change', () => {
            if (backgroundMusic) {
                backgroundMusic.muted = !backgroundMusic.muted;
                localStorage.setItem('isMuted', backgroundMusic.muted);
            }
        });
    }

    // --- NOVA FUNCIONALIDADE: IDIOMA DO SITE ---
    const peruLanguageToggleMenu = document.getElementById('peru-language-toggle-menu');
    if (peruLanguageToggleMenu) {
        const currentLanguage = localStorage.getItem('language') || 'pt-BR';
        if (currentLanguage === 'es-PE') {
            peruLanguageToggleMenu.checked = true;
        }
        // Aplicar o idioma salvo ou o padrão ao carregar a página
        applyLanguage(currentLanguage);

        peruLanguageToggleMenu.addEventListener('change', () => {
            if (peruLanguageToggleMenu.checked) {
                localStorage.setItem('language', 'es-PE');
                applyLanguage('es-PE');
            } else {
                localStorage.setItem('language', 'pt-BR');
                applyLanguage('pt-BR');
            }
        });
    }

    // 6. Scroll Reveal Animation
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // 7. Guia Gastronômico com Filtro (cultura.html)
    const gastronomyFilterButtons = document.querySelectorAll('.gastronomy-filter button');
    const gastronomyItems = document.querySelectorAll('.gastronomy-item');

    if (gastronomyFilterButtons.length > 0 && gastronomyItems.length > 0) {
        // Mostrar todos por padrão
        gastronomyItems.forEach(item => item.classList.add('show'));

        gastronomyFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                gastronomyFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                gastronomyItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                    }
                });
            });
        });
    }

    // 8. Parallax Scroll (simulado com JS para seções)
    const parallaxSections = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        parallaxSections.forEach(section => {
            const speed = section.dataset.parallaxSpeed || 0.3;
            const yPos = -(window.scrollY - section.offsetTop) * speed;
            section.style.backgroundPositionY = `${yPos}px`;
        });
    });

    // 9. Galeria 360° (Placeholder) - Não implementado no escopo atual
    // 10. Mapa Turístico Interativo (Placeholder) - Não implementado no escopo atual
});
