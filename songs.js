const songs = [
  {
    title: "Naa Ready",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Vijay",
    src: "songs/naaready.mp3",
    cover: "covers/naaready.jpg"
  },
  {
    title: "Hukum",
    movie: "Jailer",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/hukum.mp3",
    cover: "covers/hukum.jpg"
  },
  {
    title: "Vaathi Coming",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Gana Balachandar",
    src: "songs/vaathicoming.mp3",
    cover: "covers/vaathicoming.jpg"
  },
  {
    title: "Arabic Kuthu",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Jonita Gandhi",
    src: "songs/arabickuthu.mp3",
    cover: "covers/arabickuthu.jpg"
  },
  {
    title: "Chellamma",
    movie: "Doctor",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Jonita Gandhi",
    src: "songs/chellamma.mp3",
    cover: "covers/chellamma.jpg"
  },
  {
    title: "Jolly O Gymkhana",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Vijay",
    src: "songs/jolly.mp3",
    cover: "covers/jolly.jpg"
  },
  {
    title: "Donu Donu Donu",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Alisha Thomas",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg"
  },
  {
    title: "Selfie Pulla",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Vijay & Sunidhi Chauhan",
    src: "songs/selfiepulla.mp3",
    cover: "covers/selfiepulla.jpg"
  },
  {
    title: "Kolaveri Di",
    movie: "3",
    director: "Anirudh Ravichander",
    singer: "Dhanush",
    src: "songs/kolaveri.mp3",
    cover: "covers/kolaveri.jpg"
  },
  {
  title: "Thaai Kelavi",
  movie: "Thiruchitrambalam",
  director: "Anirudh Ravichander",
  singer: "Dhanush",
  src: "songs/thaaikelavi.mp3",
  cover: "covers/thaaikelavi.jpg"
},
{
    title: "Chinna Chinna Aasai",
    movie: "Roja (1992)",
    director: "A.R. Rahman",
    singer: "Minmini",
    src: "songs/chinna_chinna_aasai.mp3",
    cover: "covers/roja1.jpg"
  },
  {
    title: "Kadhal Rojave",
    movie: "Roja (1992)",
    director: "A.R. Rahman",
    singer: "S. P. Balasubrahmanyam, K. S. Chithra",
    src: "songs/kadhal_rojave.mp3",
    cover: "covers/roja.jpg"
  },
  {
    title: "Musthafa Musthafa",
    movie: "Kadhal Desam (1996)",
    director: "A.R. Rahman",
    singer: "A.R. Rahman",
    src: "songs/musthafa_musthafa.mp3",
    cover: "covers/kadhal_desam.jpg"
  },
  {
    title: "Vennilave Vennilave",
    movie: "Minsaara Kanavu (1997)",
    director: "A.R. Rahman",
    singer: "Hariharan, Sadhana Sargam",
    src: "songs/vennilave_vennilave.mp3",
    cover: "covers/minsaara_kanavu.jpg"
  },
  
  {
    title: "Ennavale Adi Ennavale",
    movie: "Kadhalan (1994)",
    director: "A.R. Rahman",
    singer: "S. P. Balasubrahmanyam",
    src: "songs/ennavale_adi_ennavale.mp3",
    cover: "covers/kadhalan.jpg"
  },
  {
    title: "Yathe Yathe",
    movie: "Aadukalam",
    director: "G.V. Prakash Kumar",
    singer: "G.V. Prakash Kumar",
    src: "songs/yatheyathe.mp3",
    cover: "covers/aadukalam.jpg"
  },
  {
    title: "Kadhal En Kadhal",
    movie: "Mayakkam Enna",
    director: "G.V. Prakash Kumar",
    singer: "Dhanush & Selvaraghavan",
    src: "songs/kadhalen.mp3",
    cover: "covers/mayakkamenna.jpg"
  },
  {
    title: "Un Mela Aasadhaan",
    movie: "Aayirathil Oruvan",
    director: "G.V. Prakash Kumar",
    singer: "Dhanush & Andrea",
    src: "songs/unmela.mp3",
    cover: "covers/aayirathiloruvan.jpg"
  },
  {
    title: "Pookal Pookum",
    movie: "Madrasapattinam",
    director: "G.V. Prakash Kumar",
    singer: "Roop Kumar Rathod & Harini",
    src: "songs/pookalpookum.mp3",
    cover: "covers/madrasapattinam.jpg"
  },
  {
    title: "Oru Murai",
    movie: "Muppozhudhum Un Karpanaigal",
    director: "G.V. Prakash Kumar",
    singer: "G.V. Prakash Kumar",
    src: "songs/orumurai.mp3",
    cover: "covers/muppozhudhum.jpg"
  },
  {
    title: "Ayyayo Nenju",
    movie: "Aadukalam",
    director: "G.V. Prakash Kumar",
    singer: "Vijay Prakash & S. P. B. Charan",
    src: "songs/ayyayo.mp3",
    cover: "covers/aadukalam.jpg"
  },
  {
    title: "Kannala Kannala",
    movie: "Thani Oruvan",
    director: "Hiphop Tamizha",
    singer: "Kaushik Krish & Shakthisree Gopalan",
    src: "songs/kannala.mp3",
    cover: "covers/kannala.jpg"
  },
  {
    title: "Meesaya Murukku Title Track",
    movie: "Meesaya Murukku",
    director: "Hiphop Tamizha",
    singer: "Hiphop Tamizha",
    src: "songs/meesaya.mp3",
    cover: "covers/meesaya.jpg"
  },
  {
    title: "Vaadi Pulla Vaadi",
    movie: "Meesaya Murukku",
    director: "Hiphop Tamizha",
    singer: "Hiphop Tamizha",
    src: "songs/vaadi.mp3",
    cover: "covers/meesaya.jpg"
  },
  {
    title: "Single Pasanga",
    movie: "Natpe Thunai",
    director: "Hiphop Tamizha",
    singer: "Hiphop Tamizha",
    src: "songs/singlepasanga.mp3",
    cover: "covers/natpe.jpg"
  },
  {
    title: "Thalli Pogathey",
    movie: "Achcham Yenbadhu Madamaiyada",
    director: "Hiphop Tamizha",
    singer: "Sid Sriram",
    src: "songs/thallipogathey.mp3",
    cover: "covers/thallipogathey.jpg"
  },
  {
    title: "Theemai Dhaan Vellum",
    movie: "Thani Oruvan",
    director: "Hiphop Tamizha",
    singer: "Hiphop Tamizha",
    src: "songs/theemai.mp3",
    cover: "covers/kannala.jpg"
  },
  
  {
    title: "En Kadhal Solla",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    src: "songs/kadhalsolla.mp3",
    cover: "covers/Paiyaa.jpg"
  },
  {
    title: "Yedho Ondru",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Haricharan",
    src: "songs/yedhoondru.mp3",
    cover: "covers/paiyaa.jpg"
  },
  {
    title: "Iragai Pole",
    movie: "Naan Mahaan Alla",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    src: "songs/iragaipole.mp3",
    cover: "covers/iragaipole.jpg"
  },
  {
    title: "Vaarayo Vaarayo",
    movie: "Aadhavan",
    director: "Harris Jayaraj",
    singer: "Unni Menon, Chinmayi",
    src: "songs/vaarayo.mp3",
    cover: "covers/vaarayo.jpg"
  },
  {
    title: "Venmathi Venmathiye",
    movie: "Minnale",
    director: "Harris Jayaraj",
    singer: "Hariharan, Timmy",
    src: "songs/venmathi.mp3",
    cover: "covers/venmathi.jpg"
  },
    {
    title: "Ondra Rendra",
    movie: "Kaakha Kaakha",
    director: "Harris Jayaraj",
    singer: "Karthik",
    src: "songs/ondrarendra.mp3",
    cover: "covers/ondrarendra.jpg"
  },
  {
    title: "Chinna Thamarai",
    movie: "Vettaikaaran",
    director: "Vijay Antony",
    singer: "Krish & Shreya Ghoshal",
    src: "songs/chinnathamarai.mp3",
    cover: "covers/vettaikaaran.jpg"
  },
 {
  title: "Karikalan",
  movie: "Vettaikaaran",
  director: "Vijay Antony",
  singer: "Vijay Antony",
  src: "songs/karikalan.mp3",
  cover: "covers/vettaikaaran.jpg"
},
{
  title: "Yaanji Yaanji",
  movie: "Vikram Vedha",
  director: "Sam C.S.",
  singer: "Anirudh Ravichander & Shakthisree Gopalan",
  src: "songs/yaanji.mp3",
  cover: "covers/yaanji.jpg"
},

{
  title: "Neeyum Naanum Anbe",
  movie: "Imaikkaa Nodigal",
  director: "Sam C.S.",
  singer: "Sathyaprakash & Shakthisree Gopalan",
  src: "songs/neeyumnaanum.mp3",
  cover: "covers/neeyumnaanum.jpg"
},

{
  title: "Ennodu Nee Irundhaal",
  movie: "I",
  director: "A. R. Rahman",
  singer: "Sid Sriram",
  src: "songs/ennodunee.mp3",
  cover: "covers/ennodunee.jpg"
},

{
  title: "Inkem Inkem Inkem Kaavaale",
  movie: "Geetha Govindam",
  director: "Gopi Sundar",
  singer: "Sid Sriram",
  src: "songs/inkeminkem.mp3",
  cover: "covers/inkeminkem.jpg"
},
{
  title: "Maruvaarthai",
  movie: "Enai Noki Paayum Thota",
  director: "Darbuka Siva",
  singer: "Sid Sriram",
  src: "songs/maruvaarthai.mp3",
  cover: "covers/maruvaarthai.jpg"
},
{
  title: "Adiye",
  movie: "Kadal",
  director: "A. R. Rahman",
  singer: "Sid Sriram",
  src: "songs/adiye.mp3",
  cover: "covers/adiye.jpg"
},
{
  title: "Mannipaaya",
  movie: "Vinnaithaandi Varuvaayaa",
  director: "A. R. Rahman",
  singer: "Shreya Ghoshal",
  src: "songs/mannipaaya.mp3",
  cover: "covers/mannipaaya.jpg"
},
{
  title: "Munbe Vaa",
  movie: "Sillunu Oru Kaadhal",
  director: "A. R. Rahman",
  singer: "Shreya Ghoshal",
  src: "songs/munbevaa.mp3",
  cover: "covers/munbevaa.jpg"
},
{
  title: "Un Perai Sollum Pothu",
  movie: "Angadi Theru",
  director: "G. V. Prakash Kumar",
  singer: "Shreya Ghoshal",
  src: "songs/unperaisollum.mp3",
  cover: "covers/unperaisollum.jpg"
},

  {
    title: "Arabic Kuthu",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/arabickuthu.mp3",
    cover: "covers/arabickuthu.jpg"
  },
  {
    title: "Chellamma",
    movie: "Doctor",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/chellamma.mp3",
    cover: "covers/chellamma.jpg"
  },
  {
    title: "Donu Donu Donu",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg"
  },
   {
  title: "Sara Sara Saara Kathu",
  movie: "Vaagai Sooda Vaa",
  director: "M. Ghibran",
  singer: "Chinmayi",
  src: "songs/sarasaara.mp3",
  cover: "covers/sarasaara.jpg"
},
{
  title: "Oru Deivam Thantha Poove",
  movie: "Kannathil Muthamittal",
  director: "A.R. Rahman",
  singer: "Chinmayi",
  src: "songs/kannathil.mp3",
  cover: "covers/kannathil.jpg"
},
{
  title: "Anbil Avan",
  movie: "Vinnaithaandi Varuvaayaa",
  director: "A.R. Rahman",
  singer: "Chinmayi",
  src: "songs/anbilavan.mp3",
  cover: "covers/anbilavan.jpg"
},
{
  title: "Ava Enna",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Karthik",
  src: "songs/avaenna.mp3",
  cover: "covers/avaenna.jpg"
},
{
    title: "Arabic Kuthu",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Jonita Gandhi",
    src: "songs/arabickuthu.mp3",
    cover: "covers/arabickuthu.jpg"
  },
  {
    title: "Chellamma",
    movie: "Doctor",
    director: "Anirudh Ravichander",
    singer: "Jonita Gandhi",
    src: "songs/chellamma.mp3",
    cover: "covers/chellamma.jpg"
  },
  {
    title: "Nee Partha Vizhigal",
    movie: "3",
    director: "Anirudh Ravichander",
    singer: "Shwetha Mohan",
    src: "songs/neepartha.mp3",
    cover: "covers/neepartha.jpg"
  },
  {
    title: "Macho",
    movie: "Mersal",
    director: "A. R. Rahman",
    singer: "Shwetha Mohan",
    src: "songs/macho.mp3",
    cover: "covers/macho.jpg"
  },
  {
    title: "Vaa Vaathi",
    movie: "Vaathi",
    director: "G. V. Prakash Kumar",
    singer: "Shwetha Mohan",
    src: "songs/vaavaathi.mp3",
    cover: "covers/vaavaathi.jpg"
  },
  {
  title: "Appadi Podu",
  movie: "Ghilli",
  director: "Vidyasagar",
  singer: "Anuradha Sriram",
  src: "songs/appadipodu.mp3",
  cover: "covers/appadipodu.jpg"
},
{
  title: "Andangkaka Kondakari",
  movie: "Anniyan",
  director: "Harris Jayaraj",
  singer: "Anuradha Sriram",
  src: "songs/andangkaka.mp3",
  cover: "covers/andangkaka.jpg"
},
{
  title: "Ada Ennatha Solvenungo",
  movie: "Sivakasi",
  director: "Srikanth Deva",
  singer: "Anuradha Sriram",
  src: "songs/ennathasolvenungo.mp3",
  cover: "covers/ennathasolvenungo.jpg"
},
{
  title: "Kaavaalaa",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Shilpa Rao & Anirudh Ravichander",
  actor: "Rajinikanth",
  src: "songs/kaavaalaa.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Rathamaarey",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Vishal Mishra",
  actor: "Rajinikanth",
  src: "songs/rathamaarey.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Jujubee",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Dhee",
  actor: "Rajinikanth",
  src: "songs/jujubee.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Jailer Drill Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  actor: "Rajinikanth",
  src: "songs/jailerdrill.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Muthuvel Pandian Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  actor: "Rajinikanth",
  src: "songs/muthuvelpandian.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Alappara Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  actor: "Rajinikanth",
  src: "songs/alappara.mp3",
  cover: "covers/hukum.jpg"
},
{
  title: "Jailer Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  actor: "Rajinikanth",
  src: "songs/jailertheme.mp3",
  cover: "covers/jhukum.jpg"
},
{
  title: "Badass",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/badass.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Anbenum",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander & Lothika",
  src: "songs/anbenum.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "I'm Scared",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/imscared.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Villain Yaaru",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/villain.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Bloody Sweet",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/bloodysweet.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Lokiverse 2.0",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/lokiverse.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Glimpse of Harold Das",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/harolddas.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Glimpse of Antony Das",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/antonydas.mp3",
  cover: "covers/naaready.jpg"
},
{
  title: "Pathala Pathala",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Kamal Haasan",
  src: "songs/pathala_pathala.mp3",
  cover: "covers/vikram.jpg"
},
{
  title: "Vikram Title Track",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/vikram_title.mp3",
  cover: "covers/vikram.jpg"
},
{
  title: "Porkanda Singam",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Ravi G.",
  src: "songs/porkanda_singam.mp3",
  cover: "covers/vikram.jpg"
},
{
  title: "Wasted",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/wasted.mp3",
  cover: "covers/vikram.jpg"
},
{
  title: "Once Upon a Time",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/once_upon_a_time.mp3",
  cover: "covers/vikram.jpg"
},
{
  title: "Master the Blaster",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Bjorn Surrao",
  src: "songs/master_the_blaster.mp3",
  cover: "covers/master.jpg"
},
{
  title: "Vaathi Raid",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Arivu",
  src: "songs/vaathi_raid.mp3",
  cover: "covers/master.jpg"
},
{
  title: "Andha Kanna Paathaakaa",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Yuvan Shankar Raja",
  src: "songs/andha_kanna_paathaakaa.mp3",
  cover: "covers/master.jpg"
},
{
  title: "Kutti Story",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Vijay",
  src: "songs/kutti_story.mp3",
  cover: "covers/master.jpg"
},
{
  title: "Quit Pannuda",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/quit_pannuda.mp3",
  cover: "covers/master.jpg"
},
{
    title: "Polakattum Para Para",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Santhosh Narayanan",
    src: "songs/polakattum.mp3",
    cover: "covers/master.jpg"
  },
  {
    title: "Beat of Master",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/beat_of_master.mp3",
    cover: "covers/master.jpg"
  },
  
  {
  title: "Pona Pogattum",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Vignesh Shivan",
  src: "songs/pona_pogattum.mp3",
  cover: "covers/master.jpg"
},
{
  title: "Vaathi Kabaddi",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander & Ananthu",
  src: "songs/vaathi_kabadi.mp3",
  cover: "covers/master.jpg"
},
 
  {
    title: "Pakkam Vanthu",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Hiphop Tamizha & Hariharasudhan",
    src: "songs/pakkamvanthu.mp3",
    cover: "covers/kaththi.jpg"
  },
  {
    title: "Aathi",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Vijay & Shreya Ghoshal",
    src: "songs/aathi.mp3",
    cover: "covers/kaththi.jpg"
  },
  {
    title: "Bad Eyes (Villain Theme)",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/badeyes.mp3",
    cover: "covers/kaththi.jpg"
  },
  {
    title: "Nee Yaaro",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Vishal Dadlani",
    src: "songs/neeyaaro.mp3",
    cover: "covers/kaththi.jpg"
  },
  {
    title: "The Sword of Destiny (Theme)",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/swordofdestiny.mp3",
    cover: "covers/kaththi.jpg"
  },
  {
    title: "Mundhinam Partheney",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Naresh Iyer & Prashanthini",
    src: "songs/mundhinam.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Nenjukkul Peidhidum",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Hariharan",
    src: "songs/nenjukkul.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Adiye Kolluthey",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Benny Dayal & Shruti Haasan",
    src: "songs/adiyekolluthey.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Oh Shanthi Shanthi",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Clinton Cerejo",
    src: "songs/ohshanthishanthi.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Ava Enna",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Karthik",
    src: "songs/avaenna.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Annal Mele Panithuli",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Sudha Raghunathan",
    src: "songs/annalmele.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Yethi Yethi",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Krishna Iyer & Benny Dayal",
    src: "songs/yethiyethi.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Vaaranam Aayiram Theme",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Instrumental",
    src: "songs/themeva.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Kill and Destroy",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S. & Sharanya Gopinath",
    src: "songs/kill_and_destroy.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Dilli’s Swag",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/dillis_swag.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Grief of Dilli",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/grief_of_dilli.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Rise of Dilli",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/rise_of_dilli.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Nepolean Theme",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/nepolean_theme.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Nee Eppo Varuva Appa",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/nee_eppo_varuva_appa.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Hot Biriyani",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/the_hot_biriyani.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Battle of Cop and Killer",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/battle_of_cop_and_killer.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Kaithi Main Theme",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/kaithi_main_theme.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Beginning of the War",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/beginning_of_the_war.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Phase of Deathcall",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/the_phase_of_deathcall.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Eternal Love of Father",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/eternal_love_of_father.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Arrival of the Ruffian",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/arrival_of_the_ruffian.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Neel Iravil",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/neel_iravil.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Emotion Hustler",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/the_emotion_hustler.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Maze",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/the_maze.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Night Is Dark",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S. & Sharanya Gopinath",
    src: "songs/night_is_dark.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Singappenney",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "A. R. Rahman & Shashaa Tirupati",
    src: "songs/singappenney.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Verithanam",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Vijay",
    src: "songs/verithanam.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Unakaga",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Sreekanth Hariharan & Shreya Ghoshal",
    src: "songs/unakaga.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Bigil Bigil Bigiluma",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Vijay, Vivek & Others",
    src: "songs/bigiluma.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Maathare",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Chinmayi & A.R. Ameen",
    src: "songs/maathare.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Vetti Kattu",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "A. R. Rahman",
    src: "songs/vettikattu.mp3",
    cover: "covers/bigil.jpg"
  },
  {
    title: "Bigil Theme (Instrumental)",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Instrumental",
    src: "songs/bigil_theme.mp3",
    cover: "covers/bigil.jpg"
  },
  {
  title: "Idharkuthaan",
  movie: "Bigil",
  director: "A. R. Rahman",
  singer: "Vivek, A. R. Rahman",
  src: "songs/idharkuthaan.mp3",
  cover: "covers/bigil.jpg"
},
{
  title: "Kaalame Kaalame",
  movie: "Bigil",
  director: "A. R. Rahman",
  singer: "Pradeep Kumar",
  src: "songs/kaalame.mp3",
  cover: "covers/bigil.jpg"
},
  {
    title: "Ranjithame",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Vijay & M.M. Manasi",
    src: "songs/ranjithame.mp3",
    cover: "covers/varisu.jpg"
  },
  {
    title: "Thee Thalapathy",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Silambarasan TR",
    src: "songs/theethalapathy.mp3",
    cover: "covers/varisu.jpg"
  },
  {
    title: "Soul of Varisu",
    movie: "Varisu",
    director: "Thaman S",
    singer: "KS Chithra",
    src: "songs/soulofvarisu.mp3",
    cover: "covers/varisu.jpg"
  },
  {
    title: "Jimikki Ponnu",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Anirudh Ravichander & Jonita Gandhi",
    src: "songs/jimikkiponnu.mp3",
    cover: "covers/varisu.jpg"
  },
  {
    title: "Vaa Thalaivaa",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Karthik & Thaman S",
    src: "songs/vaathalaivaa.mp3",
    cover: "covers/varisu.jpg"
  },
  {
  title: "Celebration of Varisu",
  movie: "Varisu",
  director: "Thaman S",
  singer: "Instrumental",
  src: "songs/celebrationofvarisu.mp3",
  cover: "covers/varisu.jpg"
},
{
    title: "Chilla Chilla",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Anirudh Ravichander",
    src: "songs/chillachilla.mp3",
    cover: "covers/thunivu.jpg"
  },
  {
    title: "Kasethan Kadavulada",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Mano & Vaisagh",
    src: "songs/kasethankadavulada.mp3",
    cover: "covers/thunivu.jpg"
  },
  {
    title: "Gangstaa",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Shabir Sulthan",
    src: "songs/gangstaa.mp3",
    cover: "covers/thunivu.jpg"
  },
  
  {
    title: "Megham Karukatha",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Dhanush",
    src: "songs/meghamkarukatha.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Thenmozhi",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Santhosh Narayanan",
    src: "songs/thenmozhi.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Life of Pazham",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/lifeofpazham.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Mayakkama Kalakkama",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Dhanush",
    src: "songs/mayakkamakalakkama.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
  title: "Kanimaa",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Santhosh Narayanan, The Indian Choral Ensemble",
  src: "songs/kanimaa.mp3",
  cover: "covers/retro.jpg"
},
  {
  title: "Love Detox",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Punya Selva, Suriya",
  src: "songs/love_detox.mp3",
  cover: "coversretro.jpg"
},
{
  title: "Edharkaga Marubadi",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Punya Selva",
  src: "songs/edharkaga_marubadi.mp3",
  cover: "covers/retro.jpg"
},
{
  title: "The One",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Sid Sriram, Santhosh Narayanan, SVDP",
  src: "songs/the_one.mp3",
  cover: "covers/retro.jpg"
},
{
  title: "Kannadi Poove",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Santhosh Narayanan",
  src: "songs/kannadi_poove.mp3",
  cover: "covers/retro.jpg"
},
{
  title: "Lose Your Fkin Mind",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "808Krshna",
  src: "songs/lose_your_fkin_mind.mp3",
  cover: "covers/retro.jpg"
},
{
  title: "Meherezylaa",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Yuvan Shankar Raja, Rizwan",
  src: "songs/meherezylaa.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Voice of Unity",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  src: "songs/voiceofunity.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Maanaadu Theme",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  src: "songs/maanaadutheme.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Dhana Dhina",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Sivam",
  src: "songs/dhanadhina.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Dhana Dhina (Reprise)",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Yuvan Shankar Raja",
  src: "songs/dhanadhinareprise.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Theme of Maanaadu (Remix)",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  src: "songs/maanaaduremix.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "The Rhythm of Maanaadu",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  src: "songs/rhythmofmaanaadu.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Kathari Poovazhagi",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Velmurugan & Rajalakshmi",
  src: "songs/katharipoovazhagi.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Yen Minukki",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Vivek & G.V. Prakash Kumar",
  src: "songs/yenminukki.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Polladha Boomi",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Dhanush",
  src: "songs/polladhaboomi.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Ellu Vaya Pookalaye",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Dhanush",
  src: "songs/elluvaya.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "The Bloodbath Theme",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Instrumental",
  src: "songs/bloodbaththeme.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Kanazhugu Rathinamey",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "G. V. Prakash Kumar & Velmurugan",
  src: "songs/kanazhugu.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Jithu Jilladi",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Thenisai Thendral Deva & Balachandran",
  src: "songs/jithujilladi.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "En Jeevan",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Hariharan, Saindhavi & Vaikom Vijayalakshmi",
  src: "songs/enjeevan.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Chella Kutti",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Vijay & Neeti Mohan",
  src: "songs/chellakutti.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Eena Meena Teeka",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Uthara Unnikrishnan & G.V. Prakash Kumar",
  src: "songs/eenameenateeka.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Thaimai",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Bombay Jayashri",
  src: "songs/thaimai.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Raangu",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Tippu, Hariharasudhan & Pooja AV",
  src: "songs/raangu.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Dub Theri Step",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Vijay, Arunraja Kamaraj & Santhosh",
  src: "songs/dubtheristep.mp3",
  cover: "covers/theri.jpg"
},
{
  title: "Aalaporaan Thamizhan",
  movie: "Mersal",
  director: "A. R. Rahman",
  singer: "Kailash Kher, Sathya Prakash, Deepak & Pooja Vaidyanath",
  src: "songs/aalaporaan.mp3",
  cover: "covers/mersal.jpg"
},
{
  title: "Neethanae",
  movie: "Mersal",
  director: "A. R. Rahman",
  singer: "A. R. Rahman & Shreya Ghoshal",
  src: "songs/neethanae.mp3",
  cover: "covers/mersal.jpg"
},

{
  title: "Mersal Arasan",
  movie: "Mersal",
  director: "A. R. Rahman",
  singer: "G. V. Prakash Kumar & Naresh Iyer",
  src: "songs/mersalarasan.mp3",
  cover: "covers/mersal.jpg"
},
{
  title: "Maara Theme",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Instrumental",
  src: "songs/maaratheme.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Veyyon Silli",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Harish Sivaramakrishnan",
  src: "songs/veyyonsilli.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Kaattu Payale",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Dhee",
  src: "songs/kaattupayale.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Aagasam",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Christin Jos & Govind Vasantha",
  src: "songs/aagasam.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Mannurunda",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Senthil Ganesh",
  src: "songs/mannurunda.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Naalu Nimisham",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Krishnaraj",
  src: "songs/naalunimisham.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Usurey",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Arjun Chandy",
  src: "songs/usurey.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Kayilae Aagasam",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "G. V. Prakash Kumar & Saindhavi",
  src: "songs/kayilaeaagasam.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
  title: "Kaalam Na Prema Kadhanta",
  movie: "24",
  director: "A. R. Rahman",
  singer: "Benny Dayal",
  src: "songs/kaalamna.mp3",
  cover: "covers/24.jpg"
},
{
  title: "Mei Nigara",
  movie: "24",
  director: "A. R. Rahman",
  singer: "Sid Sriram & Jonita Gandhi",
  src: "songs/meinigara.mp3",
  cover: "covers/24.jpg"
},
{
  title: "Naan Un",
  movie: "24",
  director: "A. R. Rahman",
  singer: "Arijit Singh & Chinmayi",
  src: "songs/naanun.mp3",
  cover: "covers/24.jpg"
},
{
  title: "Aararoo",
  movie: "24",
  director: "A. R. Rahman",
  singer: "Chinmayi",
  src: "songs/aararoo.mp3",
  cover: "covers/24.jpg"
},
{
  title: "My Twin Brother",
  movie: "24",
  director: "A. R. Rahman",
  singer: "Instrumental",
  src: "songs/mytwinbrother.mp3",
  cover: "covers/24.jpg"
},
{
  title: "Singam Singam",
  movie: "Singam",
  director: "Devi Sri Prasad",
  singer: "Devi Sri Prasad",
  src: "songs/singamsingam.mp3",
  cover: "covers/singam.jpg"
},
{
  title: "Kadhal Vandhale",
  movie: "Singam",
  director: "Devi Sri Prasad",
  singer: "Benny Dayal & Manicka Vinayagam",
  src: "songs/kadhalvandhale.mp3",
  cover: "covers/singam.jpg"
},

{
  title: "Stole My Heart",
  movie: "Singam",
  director: "Devi Sri Prasad",
  singer: "Shweta Mohan & Tippu",
  src: "songs/stolemyheart.mp3",
  cover: "covers/singam.jpg"
},
{
  title: "En Idhayam",
  movie: "Singam",
  director: "Devi Sri Prasad",
  singer: "Hariharan",
  src: "songs/enidhayam.mp3",
  cover: "covers/singam.jpg"
},
{
  title: "Naane Indiran",
  movie: "Singam",
  director: "Devi Sri Prasad",
  singer: "Devi Sri Prasad",
  src: "songs/naaneindiran.mp3",
  cover: "covers/singam.jpg"
},
{
  title: "Vizhi Moodi Yosithaal",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Karthik",
  src: "songs/vizhimoodi.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Nenje Nenje",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Haris Jayaraj & Mahathi",
  src: "songs/nenje.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Pala Palakura",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Tippu & Hariharan",
  src: "songs/palapalakura.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Honey Honey",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Chinmayi & Benny Dayal",
  src: "songs/honeyhoney.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Oyayee",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Krishna Iyer & Harish Raghavendra",
  src: "songs/oyayee.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Hukum",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Anirudh",
  src: "songs/hukum.mp3",
  cover: "covers/hukum.jpg",
  tag: "trending"
},
{
  title: "Naa Ready",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Vijay",
  src: "songs/naaready.mp3",
  cover: "covers/naaready.jpg",
  tag: "trending"
},
{
  title: "Pathala Pathala",
  movie: "Vikram",
  director: "Anirudh Ravichander",
  singer: "Kamal Haasan",
  src: "songs/pathalapathala.mp3",
  cover: "covers/vikram.jpg",
  tag: "trending"
},
{
  title: "Vaathi Coming",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Anirudh",
  src: "songs/vaathicoming.mp3",
  cover: "covers/master.jpg",
  tag: "trending"
},
{
  title: "Jolly O Gymkhana",
  movie: "Beast",
  director: "Anirudh Ravichander",
  singer: "Vijay",
  src: "songs/jolly.mp3",
  cover: "covers/jolly.jpg",
  tag: "trending"
},
{
  title: "Ranjithame",
  movie: "Varisu",
  director: "Thaman S",
  singer: "Vijay & M.M. Manasi",
  src: "songs/ranjithame.mp3",
  cover: "covers/varisu.jpg",
  tag: "trending"
},
{
  title: "Thaai Kelavi",
  movie: "Thiruchitrambalam",
  director: "Anirudh Ravichander",
  singer: "Dhanush",
  src: "songs/thaikelavi.mp3",
  cover: "covers/thiruchitrambalam.jpg",
  tag: "trending"
},
{
  title: "Sooravali",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Christin Jos & G.V. Prakash",
  src: "songs/sooravali.mp3",
  cover: "covers/sooraraipottru.jpg",
  tag: "trending"
},
{
   title: "Vaathi Kabaddi",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander & Ananthu",
  src: "songs/vaathi_kabadi.mp3",
  cover: "covers/master.jpg",
  tag: "trending"
},
{
  title: "Chilla Chilla",
  movie: "Thunivu",
  director: "Ghibran",
  singer: "Anirudh",
  src: "songs/chillachilla.mp3",
  cover: "covers/thunivu.jpg",
  tag: "trending"
},
 {
  title: "En Jeevan",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Hariharan, Saindhavi & Vaikom Vijayalakshmi",
  src: "songs/enjeevan.mp3",
  cover: "covers/theri.jpg",
  tag: "trending"
},
{
  title: "Yethi Yethi",
  movie: "Varanam Aayiram",
  director: "Harris Jayaraj",
  singer: "Krishna Iyer & Benny Dayal",
  src: "songs/yethiyethi.mp3",
  cover: "covers/varanamaayiram.jpg",
  tag: "trending"
},
{
  title: "Kaattu Payale",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Dhee",
  src: "songs/kaattupayale.mp3",
  cover: "covers/sooraraipottru.jpg",
  tag: "trending"
},
{
  title: "Kutti Story",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Vijay",
  src: "songs/kutti_story.mp3",
  cover: "covers/master.jpg",
  tag: "trending"
},
{
  title: "The One",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Sid Sriram, Santhosh Narayanan, SVDP",
  src: "songs/the_one.mp3",
  cover: "covers/retro.jpg",
  tag: "trending"
},
{
  title: "Alappara Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/alappara.mp3",
  cover: "covers/jailer.jpg",
  tag: "trending"
},
{
title: "Celebration of Varisu",
  movie: "Varisu",
  director: "Thaman S",
  singer: "Instrumental",
  src: "songs/celebrationofvarisu.mp3",
  cover: "covers/varisu.jpg",
  tag: "trending"
},
{
 title: "Kanimaa",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Santhosh Narayanan, The Indian Choral Ensemble",
  src: "songs/kanimaa.mp3",
  cover: "covers/retro.jpg",
  tag: "trending"
},
{
 title: "Nee Partha Vizhigal",
    movie: "3",
    director: "Anirudh Ravichander",
    singer: "Shwetha Mohan",
    src: "songs/neepartha.mp3",
    cover: "covers/neepartha.jpg",
  tag: "trending"
},
{
  title: "Oh Shanthi Shanthi",
  movie: "Varanam Aayiram",
  director: "Harris Jayaraj",
  singer: "Clinton Cerejo",
  src: "songs/ohshanthishanthi.mp3",
  cover: "covers/varanamaayiram.jpg",
  tag: "trending"
},
 {
    title: "Arabic Kuthu",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Jonita Gandhi",
    src: "songs/arabickuthu.mp3",
    cover: "covers/arabickuthu.jpg",
    tag: "dance"
  },
  {
    title: "Vaathi Coming",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Anirudh",
    src: "songs/vaathicoming.mp3",
    cover: "covers/master.jpg",
    tag: "dance"
  },
  {
      title: "Thaai Kelavi",
  movie: "Thiruchitrambalam",
  director: "Anirudh Ravichander",
  singer: "Dhanush",
  src: "songs/thaaikelavi.mp3",
  cover: "covers/thaaikelavi.jpg",
    tag: "dance"
  },
  {
  title: "Karikalan",
  movie: "Vettaikaaran",
  director: "Vijay Antony",
  singer: "Vijay Antony",
  src: "songs/karikalan.mp3",
  cover: "covers/vettaikaaran.jpg",
    tag: "dance"
  },
  {
  title: "Appadi Podu",
  movie: "Ghilli",
  director: "Vidyasagar",
  singer: "Anuradha Sriram",
  src: "songs/appadipodu.mp3",
  cover: "covers/appadipodu.jpg",
    tag: "dance"
  },
  {
    title: "Macho",
    movie: "Mersal",
    director: "A. R. Rahman",
    singer: "Sid Sriram & Shwetha Mohan",
    src: "songs/macho.mp3",
    cover: "covers/mersal.jpg",
    tag: "dance"
  },
  {
    title: "Chellamma",
    movie: "Doctor",
    director: "Anirudh Ravichander",
    singer: "Anirudh",
    src: "songs/chellamma.mp3",
    cover: "covers/chellamma.jpg",
    tag: "dance"
  },
  {
  title: "Andangkaka Kondakari",
  movie: "Anniyan",
  director: "Harris Jayaraj",
  singer: "Anuradha Sriram",
  src: "songs/andangkaka.mp3",
  cover: "covers/andangkaka.jpg",
  tag: "dance"
  },
  {
  title: "Ada Ennatha Solvenungo",
  movie: "Sivakasi",
  director: "Srikanth Deva",
  singer: "Anuradha Sriram",
  src: "songs/ennathasolvenungo.mp3",
  cover: "covers/ennathasolvenungo.jpg",
  tag: "dance"
  },
  {
    title: "Jolly O Gymkhana",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Vijay",
    src: "songs/jolly.mp3",
    cover: "covers/jolly.jpg",
    tag: "dance"
  },
  {
    title: "Chilla Chilla",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Anirudh Ravichander",
    src: "songs/chillachilla.mp3",
    cover: "covers/thunivu.jpg",
    tag: "dance"
  },
  {
   title: "Kaavaalaa",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Shilpa Rao & Anirudh Ravichander",
  actor: "Rajinikanth",
  src: "songs/kaavaalaa.mp3",
  cover: "covers/hukum.jpg",
  tag: "dance"
  },
  {
  title: "Kanimaa",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Santhosh Narayanan, The Indian Choral Ensemble",
  src: "songs/kanimaa.mp3",
  cover: "covers/retro.jpg",
    tag: "dance"
  },
  {
   title: "Jithu Jilladi",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Thenisai Thendral Deva & Balachandran",
  src: "songs/jithujilladi.mp3",
  cover: "covers/theri.jpg",
  tag: "dance"
  },
  {
    title: "Don'u Don'u Don'u",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg",
    tag: "dance"
  },
  {
  title: "Jimikki Ponnu",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Anirudh Ravichander & Jonita Gandhi",
    src: "songs/jimikkiponnu.mp3",
    cover: "covers/varisu.jpg",
    tag: "dance"
  },
  {
    title: "Hukum",
    movie: "Jailer",
    director: "Anirudh Ravichander",
    singer: "Anirudh",
    src: "songs/hukum.mp3",
    cover: "covers/jailer.jpg",
    tag: "dance"
  },
  {
  title: "Raangu",
  movie: "Theri",
  director: "G. V. Prakash Kumar",
  singer: "Tippu, Hariharasudhan & Pooja AV",
  src: "songs/raangu.mp3",
  cover: "covers/theri.jpg",
    tag: "dance"
  },
  {
  title: "Aalaporaan Thamizhan",
  movie: "Mersal",
  director: "A. R. Rahman",
  singer: "Kailash Kher, Sathya Prakash, Deepak & Pooja Vaidyanath",
  src: "songs/aalaporaan.mp3",
  cover: "covers/mersal.jpg",
    tag: "dance"
  },
  {
  title: "Mersal Arasan",
  movie: "Mersal",
  director: "A. R. Rahman",
  singer: "G. V. Prakash Kumar & Naresh Iyer",
  src: "songs/mersalarasan.mp3",
  cover: "covers/mersal.jpg",
    tag: "dance"
  },
  {
  title: "Nenjukkul Peidhidum",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Hariharan",
  actor: "Suriya",
  src: "songs/nenjukkul.mp3",
  cover: "covers/varanamaayiram.jpg"
},
{
  title: "Adiye Kolluthey",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Benny Dayal & Shruti Haasan",
  actor: "Suriya",
  src: "songs/adiyekolluthey.mp3",
  cover: "covers/varanamaayiram.jpg"
},
{
  title: "Ava Enna",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Karthik",
  actor: "Suriya",
  src: "songs/avaenna.mp3",
  cover: "covers/varanamaayiram.jpg"
},
{
  title: "Kanimaa",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Santhosh Narayanan, The Indian Choral Ensemble",
  actor: "Suriya",
  src: "songs/kanimaa.mp3",
  cover: "covers/retro.jpg"

},
{
  title: "Oh Shanthi Shanthi",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Clinton Cerejo",
  actor: "Suriya",
  src: "songs/ohshanthishanthi.mp3",
  cover: "covers/varanamaayiram.jpg"
},
{
  title: "Yethi Yethi",
  movie: "Vaaranam Aayiram",
  director: "Harris Jayaraj",
  singer: "Krishna Iyer & Benny Dayal",
  actor: "Suriya",
  src: "songs/yethiyethi.mp3",
  cover: "covers/varanamaayiram.jpg"
},
{
 title: "The One",
  movie: "Retro",
  director: "Santhosh Narayanan",
  singer: "Sid Sriram, Santhosh Narayanan, SVDP",
  actor: "Suriya",
   src: "songs/the_one.mp3",
  cover: "covers/retro.jpg"

},
{
title: "Kaattu Payale",
  movie: "Soorarai Pottru",
  director: "G. V. Prakash Kumar",
  singer: "Dhee",
  actor: "Suriya",
   src: "songs/kaattupayale.mp3",
  cover: "covers/sooraraipottru.jpg"
},
{
 
  title: "Vizhi Moodi Yosithaal",
  movie: "Ayan",
  director: "Harris Jayaraj",
  singer: "Karthik",
  actor: "Suriya",
   src: "songs/vizhimoodi.mp3",
  cover: "covers/ayan.jpg"
},
{
  title: "Ondra Rendra",
  movie: "Kaakha Kaakha",
  director: "Harris Jayaraj",
  singer: "Karthik",
  actor: "Suriya",
  src: "songs/ondrarendra.mp3",
   cover: "covers/ondrarendra.jpg"
},
//ajith
{
  title: "Chilla Chilla",
  movie: "Thunivu",
  director: "Ghibran",
  singer: "Anirudh Ravichander",
  actor: "Ajith Kumar",
  src: "songs/chillachilla.mp3",
  cover: "covers/thunivu.jpg"
},
{
  title: "Kasethan Kadavulada",
  movie: "Thunivu",
  director: "Ghibran",
  singer: "Mano & Vaisagh",
  actor: "Ajith Kumar",
  src: "songs/kasethankadavulada.mp3",
  cover: "covers/thunivu.jpg"
},
{
  title: "Gangstaa",
  movie: "Thunivu",
  director: "Ghibran",
  singer: "Shabir Sulthan",
  actor: "Ajith Kumar",
  src: "songs/gangstaa.mp3",
  cover: "covers/thunivu.jpg"
},
//
{
  title: "Rendu Kaadhal",
  movie: "Kaathuvaakula Rendu Kaadhal",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander, Shakthisree Gopalan, Aishwarya Suresh Bindra",
   actor: "Vijay Sethupathi",
  src: "songs/rendu_kaadhal.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Two Two Two",
  movie: "Kaathuvaakula Rendu Kaadhal",
  director: "Anirudh Ravichander",
  singer: "Anirudh, Sunidhi Chauhan, Sanjana Kalmanje",
  actor: "Vijay Sethupathi",
  src: "songs/two_two_two.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Naan Pizhai",
  movie: "Kaathuvaakula Rendu Kaadhal",
  director: "Anirudh Ravichander",
  singer: "Ravi G, Shashaa Tirupati, Anirudh",
  actor: "Vijay Sethupathi",
  src: "songs/naan_pizhai.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Dippam Dappam",
  movie: "Kaathuvaakula Rendu Kaadhal",
  director: "Anirudh Ravichander",
  singer: "Anirudh, Anthony Daasan",
  actor: "Vijay Sethupathi",
  src: "songs/dippam_dappam.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Yaanji",
  movie: "Vikram Vedha",
  director: "Sam C.S.",
  singer: "Anirudh Ravichander, Shakthisree Gopalan",
  actor: "Vijay Sethupathi",
  src: "songs/yaanji.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Tasakku Tasakku",
  movie: "Vikram Vedha",
  director: "Sam C.S.",
  singer: "M.L.R. Karthikeyan",
  actor: "Vijay Sethupathi",
  src: "songs/tasakku_tasakku.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Karuppu Vellai",
  movie: "Vikram Vedha",
  director: "Sam C.S.",
  singer: "Sam C.S., Shivam",
  actor: "Vijay Sethupathi",
  src: "songs/karuppu_vellai.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Thangamey",
  movie: "Naanum Rowdy Dhaan",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  actor: "Vijay Sethupathi",
  src: "songs/thangamey.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Neeyum Naanum",
  movie: "Naanum Rowdy Dhaan",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander, Neeti Mohan",
  actor: "Vijay Sethupathi",
  src: "songs/neeyum_naanum.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Naanum Rowdy Dhaan",
  movie: "Naanum Rowdy Dhaan",
  director: "Anirudh Ravichander",
  singer: "Benny Dayal",
  actor: "Vijay Sethupathi",
  src: "songs/naanum_rowdy_dhaan.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Yennai Maatrum Kadhale",
  movie: "Naanum Rowdy Dhaan",
  director: "Anirudh Ravichander",
  singer: "Sid Sriram",
  actor: "Vijay Sethupathi",
  src: "songs/yennai_maatrum_kadhale.mp3",
  cover: "covers/vjs.jpg"
},
{
  title: "Kathari Poovazhagi",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Velmurugan & Rajalakshmi",
  actor: "Dhanush",
  src: "songs/katharipoovazhagi.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Yen Minukki",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Vivek & G.V. Prakash Kumar",
  actor: "Dhanush",
  src: "songs/yenminukki.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Polladha Boomi",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Dhanush",
   actor: "Dhanush",
  src: "songs/polladhaboomi.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Ellu Vaya Pookalaye",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Dhanush",
   actor: "Dhanush",
  src: "songs/elluvaya.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "The Bloodbath Theme",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "Instrumental",
   actor: "Dhanush",
  src: "songs/bloodbaththeme.mp3",
  cover: "covers/asuran.jpg"
},
{
  title: "Kanazhugu Rathinamey",
  movie: "Asuran",
  director: "G. V. Prakash Kumar",
  singer: "G. V. Prakash Kumar & Velmurugan",
   actor: "Dhanush",
  src: "songs/kanazhugu.mp3",
  cover: "covers/asuran.jpg"
},
  {
    title: "Donu Donu Donu",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
     actor: "Dhanush",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg"
  },
{
    title: "Megham Karukatha",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Dhanush",
     actor: "Dhanush",
    src: "songs/meghamkarukatha.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Thenmozhi",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Santhosh Narayanan",
     actor: "Dhanush",
    src: "songs/thenmozhi.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Life of Pazham",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
     actor: "Dhanush",
    src: "songs/lifeofpazham.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Mayakkama Kalakkama",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Dhanush",
    actor: "Dhanush",
    src: "songs/mayakkamakalakkama.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  
 {
    title: "Naa Ready",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Vijay",
    actor: "Vijay",
    src: "songs/naaready.mp3",
    cover: "covers/naaready.jpg"
  },
  {
    title: "Vaathi Coming",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Gana Balachandar",
     actor: "Vijay",
    src: "songs/vaathicoming.mp3",
    cover: "covers/vaathicoming.jpg"
  },
 {
    title: "Arabic Kuthu",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Jonita Gandhi",
     actor: "Vijay",
    src: "songs/arabickuthu.mp3",
    cover: "covers/arabickuthu.jpg"
  },
 {
    title: "Jolly O Gymkhana",
    movie: "Beast",
    director: "Anirudh Ravichander",
    singer: "Vijay",
     actor: "Vijay",
    src: "songs/jolly.mp3",
    cover: "covers/jolly.jpg"
  },
 {
    title: "Selfie Pulla",
    movie: "Kaththi",
    director: "Anirudh Ravichander",
    singer: "Vijay & Sunidhi Chauhan",
     actor: "Vijay",
    src: "songs/selfiepulla.mp3",
    cover: "covers/selfiepulla.jpg"
  },
 {
  title: "Karikalan",
  movie: "Vettaikaaran",
  director: "Vijay Antony",
  singer: "Vijay Antony",
   actor: "Vijay",
  src: "songs/karikalan.mp3",
  cover: "covers/vettaikaaran.jpg"
},
 {
    title: "Macho",
    movie: "Mersal",
    director: "A. R. Rahman",
    singer: "Shwetha Mohan",
     actor: "Vijay",
    src: "songs/macho.mp3",
    cover: "covers/macho.jpg"
  },
  {
  title: "Appadi Podu",
  movie: "Ghilli",
  director: "Vidyasagar",
  singer: "Anuradha Sriram",
   actor: "Vijay",
  src: "songs/appadipodu.mp3",
  cover: "covers/appadipodu.jpg"
},
{
  title: "Ada Ennatha Solvenungo",
  movie: "Sivakasi",
  director: "Srikanth Deva",
  singer: "Anuradha Sriram",
   actor: "Vijay",
  src: "songs/ennathasolvenungo.mp3",
  cover: "covers/ennathasolvenungo.jpg"
},
{
  title: "Alappara Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  actor: "Rajinikanth",
  actor: "Vijay",
  src: "songs/alappara.mp3",
  cover: "covers/hukum.jpg"
},
 
  
  {
    title: "En Kadhal Solla",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    actor: "Karthi",
    src: "songs/kadhalsolla.mp3",
    cover: "covers/Paiyaa.jpg"
  },
  {
    title: "Yedho Ondru",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Haricharan",
    actor: "Karthi",
    src: "songs/yedhoondru.mp3",
    cover: "covers/paiyaa.jpg"
  },
  {
    title: "Iragai Pole",
    movie: "Naan Mahaan Alla",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    actor: "Karthi",
    src: "songs/iragaipole.mp3",
    cover: "covers/iragaipole.jpg"
  },
{
    title: "Kill and Destroy",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S. & Sharanya Gopinath",
    actor: "Karthi",
    src: "songs/kill_and_destroy.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Dilli’s Swag",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/dillis_swag.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Grief of Dilli",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/grief_of_dilli.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Rise of Dilli",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/rise_of_dilli.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Nepolean Theme",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/nepolean_theme.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Nee Eppo Varuva Appa",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/nee_eppo_varuva_appa.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Hot Biriyani",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/the_hot_biriyani.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Battle of Cop and Killer",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/battle_of_cop_and_killer.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Kaithi Main Theme",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/kaithi_main_theme.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Beginning of the War",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/beginning_of_the_war.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Phase of Deathcall",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/the_phase_of_deathcall.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Eternal Love of Father",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/eternal_love_of_father.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Arrival of the Ruffian",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/arrival_of_the_ruffian.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Neel Iravil",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/neel_iravil.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Emotion Hustler",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/the_emotion_hustler.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "The Maze",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    actor: "Karthi",
    src: "songs/the_maze.mp3",
    cover: "covers/kaithi.jpg"
  },
  {
    title: "Night Is Dark",
    movie: "Kaithi",
    director: "Sam C.S.",
    actor: "Karthi",
    singer: "Sam C.S. & Sharanya Gopinath",
    src: "songs/night_is_dark.mp3",
    cover: "covers/kaithi.jpg"
  },
   {
    title: "Un Mela Aasadhaan",
    movie: "Aayirathil Oruvan",
    director: "G.V. Prakash Kumar",
    singer: "Dhanush & Andrea",
    actor: "Karthi",
    src: "songs/unmela.mp3",
    cover: "covers/aayirathiloruvan.jpg"
  },
 {
  title: "Meherezylaa",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Yuvan Shankar Raja, Rizwan",
  actor: "Silambarasan (STR)",
  src: "songs/meherezylaa.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Voice of Unity",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  actor: "Silambarasan (STR)",
  src: "songs/voiceofunity.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Maanaadu Theme",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  actor: "Silambarasan (STR)",
  src: "songs/maanaadutheme.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Dhana Dhina",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Sivam",
  actor: "Silambarasan (STR)",
  src: "songs/dhanadhina.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Dhana Dhina (Reprise)",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Yuvan Shankar Raja",
  actor: "Silambarasan (STR)",
  src: "songs/dhanadhinareprise.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "Theme of Maanaadu (Remix)",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  actor: "Silambarasan (STR)",
  src: "songs/maanaaduremix.mp3",
  cover: "covers/maanaadu.jpg"
},
{
  title: "The Rhythm of Maanaadu",
  movie: "Maanaadu",
  director: "Yuvan Shankar Raja",
  singer: "Instrumental",
  actor: "Silambarasan (STR)",
  src: "songs/rhythmofmaanaadu.mp3",
  cover: "covers/maanaadu.jpg"
},
[
  {
    title: "Hukum",
    movie: "Jailer",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/hukum.mp3",
    cover: "covers/jailer.jpg"
  },
  {
    title: "Muthuvel Pandian Theme",
    movie: "Jailer",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/muthuvelpandian.mp3",
    cover: "covers/jailer.jpg"
  },
  {
    title: "Jujubee",
    movie: "Jailer",
    director: "Anirudh Ravichander",
    singer: "Dhee",
    src: "songs/jujubee.mp3",
    cover: "covers/jailer.jpg"
  },
  {
    title: "Leo Theme",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/leotheme.mp3",
    cover: "covers/leo.jpg"
  },
  {
    title: "Glimpse of Harold Das",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/harolddas.mp3",
    cover: "covers/leo.jpg"
  },
  {
    title: "Glimpse of Antony Das",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/antonydas.mp3",
    cover: "covers/leo.jpg"
  },
  {
    title: "Lokiverse 2.0",
    movie: "Leo",
    director: "Anirudh Ravichander",
    singer: "Instrumental",
    src: "songs/lokiverse.mp3",
    cover: "covers/leo.jpg"
  },
  {
    title: "Celebration of Varisu",
    movie: "Varisu",
    director: "Thaman S",
    singer: "Thaman S",
    src: "songs/celebrationofvarisu.mp3",
    cover: "covers/varisu.jpg"
  },
  {
    title: "Chilla Chilla",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Anirudh Ravichander",
    src: "songs/chillachilla.mp3",
    cover: "covers/thunivu.jpg"
  },
  {
    title: "Kasethan Kadavulada",
    movie: "Thunivu",
    director: "Ghibran",
    singer: "Mano, Vaisagh",
    src: "songs/kasethan.mp3",
    cover: "covers/thunivu.jpg"
  },
  {
    title: "Dippam Dappam",
    movie: "Thiruchitrambalam",
    director: "Anirudh Ravichander",
    singer: "Dhanush, STR",
    src: "songs/dippamdappam.mp3",
    cover: "covers/thiruchitrambalam.jpg"
  },
  {
    title: "Meherezylaa",
    movie: "Maanaadu",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan, Rizwan, Raja Bhavatharini",
    src: "songs/meherezylaa.mp3",
    cover: "covers/maanadu.jpg"
  },
  {
    title: "Vaathi Kabadi",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/vaathikabadi.mp3",
    cover: "covers/master.jpg"
  },
  {
    title: "Kalama",
    movie: "Vikram",
    director: "Anirudh Ravichander",
    singer: "Uthara Unnikrishnan",
    src: "songs/kalama.mp3",
    cover: "covers/vikram.jpg"
  },
  {
    title: "Pona Pogatum",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Gana Balachandar",
    src: "songs/ponapogatum.mp3",
    cover: "covers/master.jpg"
  },
  {
    title: "Anbil Avan",
    movie: "Vaaranam Aayiram",
    director: "Harris Jayaraj",
    singer: "Harish Raghavendra, Shreya Ghoshal",
    src: "songs/anbilavan.mp3",
    cover: "covers/varanamaayiram.jpg"
  },
  {
    title: "Vathi Raid",
    movie: "Master",
    director: "Anirudh Ravichander",
    singer: "Arivu",
    src: "songs/vathiraid.mp3",
    cover: "covers/master.jpg"
  },
  {
    title: "Dance Hits Mashup",
    movie: "Special",
    director: "Various",
    singer: "Various Artists",
    src: "songs/dancemashup.mp3",
    cover: "covers/special.jpg"
  },
  {
    title: "Aalaporan Thamizhan",
    movie: "Mersal",
    director: "A.R. Rahman",
    singer: "Kailash Kher, Sathya Prakash, Deepak, Pooja V.",
    src: "songs/aalaporan.mp3",
    cover: "covers/mersal.jpg"
  },
  {
    title: "Yethi Yethi",
    movie: "Vaaranam Aayiram",
    director: "Harris Jayaraj",
    singer: "Krishna Iyer, Benny Dayal",
    src: "songs/yethiyethi.mp3",
    cover: "covers/varanamaayiram.jpg"
  }
],
{
  title: "Hukum",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/hukum.mp3",
  cover: "covers/hukum.jpg",
  tag: "new"
},
{
  title: "Jujubee",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander & Ananthakrrishnan",
  src: "songs/jujubee.mp3",
  cover: "covers/hukum.jpg",
  tag: "new"
},
{
  title: "Rathamaarey",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Vishal Mishra",
  src: "songs/rathamaarey.mp3",
  cover: "covers/hukum.jpg",
  tag: "new"
},
{
  title: "Alappara Theme",
  movie: "Jailer",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/alappara.mp3",
  cover: "covers/hukum.jpg",
  tag: "new"
},
{
  title: "Glimpse of Harold Das",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/harolddas.mp3",
  cover: "covers/naaready.jpg",
  tag: "new"
},
{
  title: "Glimpse of Antony Das",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/antonydas.mp3",
  cover: "covers/naaready.jpg",
  tag: "new"
},
{
  title: "Badass",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander",
  src: "songs/badass.mp3",
  cover: "covers/naaready.jpg",
  tag: "new"
},
{
  title: "Lokiverse 2.0",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Instrumental",
  src: "songs/lokiverse.mp3",
  cover: "covers/naaready.jpg",
  tag: "new"
},

{
  title: "Celebration of Varisu",
  movie: "Varisu",
  director: "Thaman S",
  singer: "Thaman S",
  src: "songs/celebrationofvarisu.mp3",
  cover: "covers/varisu.jpg",
  tag: "new"
},

{
    title: "Dilli’s Swag",
    movie: "Kaithi",
    director: "Sam C.S.",
    singer: "Sam C.S.",
    src: "songs/dillis_swag.mp3",
    cover: "covers/kaithi.jpg",
  tag: "new"
},
{
    title: "Theemai Dhaan Vellum",
    movie: "Thani Oruvan",
    director: "Hiphop Tamizha",
    singer: "Hiphop Tamizha",
    src: "songs/theemai.mp3",
    cover: "covers/kannala.jpg",
    tag: "new"
  },

{
  title: "Ranjithame",
  movie: "Varisu",
  director: "Thaman S",
  singer: "Vijay & M.M. Manasi",
  src: "songs/ranjithame.mp3",
  cover: "covers/varisu.jpg",
  tag: "new"
},
 {
    title: "Donu Donu Donu",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh & Alisha Thomas",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg",
    tag: "melody"
  },

 {
    title: "Kadhal Rojave",
    movie: "Roja (1992)",
    director: "A.R. Rahman",
    singer: "S. P. Balasubrahmanyam, K. S. Chithra",
    src: "songs/kadhal_rojave.mp3",
    cover: "covers/roja.jpg",
    tag: "melody"
  },

 {
    title: "Vennilave Vennilave",
    movie: "Minsaara Kanavu (1997)",
    director: "A.R. Rahman",
    singer: "Hariharan, Sadhana Sargam",
    src: "songs/vennilave_vennilave.mp3",
    cover: "covers/minsaara_kanavu.jpg",
    tag: "melody"
  },

  
  {
    title: "Ennavale Adi Ennavale",
    movie: "Kadhalan (1994)",
    director: "A.R. Rahman",
    singer: "S. P. Balasubrahmanyam",
    src: "songs/ennavale_adi_ennavale.mp3",
    cover: "covers/kadhalan.jpg",
    tag: "melody"
  },

{
    title: "Pookal Pookum",
    movie: "Madrasapattinam",
    director: "G.V. Prakash Kumar",
    singer: "Roop Kumar Rathod & Harini",
    src: "songs/pookalpookum.mp3",
    cover: "covers/madrasapattinam.jpg",
    tag: "melody"
  },

 {
    title: "Ayyayo Nenju",
    movie: "Aadukalam",
    director: "G.V. Prakash Kumar",
    singer: "Vijay Prakash & S. P. B. Charan",
    src: "songs/ayyayo.mp3",
    cover: "covers/aadukalam.jpg",
    tag: "melody"
  },
  {
    title: "Kannala Kannala",
    movie: "Thani Oruvan",
    director: "Hiphop Tamizha",
    singer: "Kaushik Krish & Shakthisree Gopalan",
    src: "songs/kannala.mp3",
    cover: "covers/kannala.jpg",
    tag: "melody"
  },


 {
    title: "Thalli Pogathey",
    movie: "Achcham Yenbadhu Madamaiyada",
    director: "Hiphop Tamizha",
    singer: "Sid Sriram",
    src: "songs/thallipogathey.mp3",
    cover: "covers/thallipogathey.jpg",
    tag: "melody"
  },

{
    title: "En Kadhal Solla",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    src: "songs/kadhalsolla.mp3",
    cover: "covers/Paiyaa.jpg",
    tag: "melody"
  },
  {
    title: "Yedho Ondru",
    movie: "Paiyaa",
    director: "Yuvan Shankar Raja",
    singer: "Haricharan",
    src: "songs/yedhoondru.mp3",
    cover: "covers/paiyaa.jpg",
    tag: "melody"
  },
  {
    title: "Iragai Pole",
    movie: "Naan Mahaan Alla",
    director: "Yuvan Shankar Raja",
    singer: "Yuvan Shankar Raja",
    src: "songs/iragaipole.mp3",
    cover: "covers/iragaipole.jpg",
    tag: "melody"
  },
  {
    title: "Vaarayo Vaarayo",
    movie: "Aadhavan",
    director: "Harris Jayaraj",
    singer: "Unni Menon, Chinmayi",
    src: "songs/vaarayo.mp3",
    cover: "covers/vaarayo.jpg",
    tag: "melody"
  },

   {
    title: "Ondra Rendra",
    movie: "Kaakha Kaakha",
    director: "Harris Jayaraj",
    singer: "Karthik",
    src: "songs/ondrarendra.mp3",
    cover: "covers/ondrarendra.jpg",
    tag: "melody"
  },
  {
    title: "Chinna Thamarai",
    movie: "Vettaikaaran",
    director: "Vijay Antony",
    singer: "Krish & Shreya Ghoshal",
    src: "songs/chinnathamarai.mp3",
    cover: "covers/vettaikaaran.jpg",
    tag: "melody"
  },

{
  title: "Yaanji Yaanji",
  movie: "Vikram Vedha",
  director: "Sam C.S.",
  singer: "Anirudh Ravichander & Shakthisree Gopalan",
  src: "songs/yaanji.mp3",
  cover: "covers/yaanji.jpg",
  tag: "melody"
},

{
  title: "Neeyum Naanum Anbe",
  movie: "Imaikkaa Nodigal",
  director: "Sam C.S.",
  singer: "Sathyaprakash & Shakthisree Gopalan",
  src: "songs/neeyumnaanum.mp3",
  cover: "covers/neeyumnaanum.jpg",
  tag: "melody"
},

{
  title: "Ennodu Nee Irundhaal",
  movie: "I",
  director: "A. R. Rahman",
  singer: "Sid Sriram",
  src: "songs/ennodunee.mp3",
  cover: "covers/ennodunee.jpg",
  tag: "melody"
},

{
  title: "Inkem Inkem Inkem Kaavaale",
  movie: "Geetha Govindam",
  director: "Gopi Sundar",
  singer: "Sid Sriram",
  src: "songs/inkeminkem.mp3",
  cover: "covers/inkeminkem.jpg",
  tag: "melody"
},
{
  title: "Maruvaarthai",
  movie: "Enai Noki Paayum Thota",
  director: "Darbuka Siva",
  singer: "Sid Sriram",
  src: "songs/maruvaarthai.mp3",
  cover: "covers/maruvaarthai.jpg",
  tag: "melody"
},

{
  title: "Mannipaaya",
  movie: "Vinnaithaandi Varuvaayaa",
  director: "A. R. Rahman",
  singer: "Shreya Ghoshal",
  src: "songs/mannipaaya.mp3",
  cover: "covers/mannipaaya.jpg",
  tag: "melody"
},
{
  title: "Munbe Vaa",
  movie: "Sillunu Oru Kaadhal",
  director: "A. R. Rahman",
  singer: "Shreya Ghoshal",
  src: "songs/munbevaa.mp3",
  cover: "covers/munbevaa.jpg",
  tag: "melody"
},
{
  title: "Un Perai Sollum Pothu",
  movie: "Angadi Theru",
  director: "G. V. Prakash Kumar",
  singer: "Shreya Ghoshal",
  src: "songs/unperaisollum.mp3",
  cover: "covers/unperaisollum.jpg",
  tag: "melody"
},

{
    title: "Donu Donu Donu",
    movie: "Maari",
    director: "Anirudh Ravichander",
    singer: "Anirudh Ravichander",
    src: "songs/donudonu.mp3",
    cover: "covers/donudonu.jpg",
    tag: "melody"
  },
   {
  title: "Sara Sara Saara Kathu",
  movie: "Vaagai Sooda Vaa",
  director: "M. Ghibran",
  singer: "Chinmayi",
  src: "songs/sarasaara.mp3",
  cover: "covers/sarasaara.jpg",
  tag: "melody"
},
{
  title: "Oru Deivam Thantha Poove",
  movie: "Kannathil Muthamittal",
  director: "A.R. Rahman",
  singer: "Chinmayi",
  src: "songs/kannathil.mp3",
  cover: "covers/kannathil.jpg",
  tag: "melody"
},

 {
    title: "Nee Partha Vizhigal",
    movie: "3",
    director: "Anirudh Ravichander",
    singer: "Shwetha Mohan",
    src: "songs/neepartha.mp3",
    cover: "covers/neepartha.jpg",
    tag: "melody"
  },

{
  title: "Anbenum",
  movie: "Leo",
  director: "Anirudh Ravichander",
  singer: "Anirudh Ravichander & Lothika",
  src: "songs/anbenum.mp3",
  cover: "covers/naaready.jpg",
  tag: "melody"
},

{
  title: "Andha Kanna Paathaakaa",
  movie: "Master",
  director: "Anirudh Ravichander",
  singer: "Yuvan Shankar Raja",
  src: "songs/andha_kanna_paathaakaa.mp3",
  cover: "covers/master.jpg",
  tag: "melody"
},

{

   title: "Mundhinam Partheney",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Naresh Iyer & Prashanthini",
    src: "songs/mundhinam.mp3",
    cover: "covers/varanamaayiram.jpg",
    tag: "melody"
  },
  {
    title: "Nenjukkul Peidhidum",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Hariharan",
    src: "songs/nenjukkul.mp3",
    cover: "covers/varanamaayiram.jpg",
    tag: "melody"
  },

 {
    title: "Annal Mele Panithuli",
    movie: "Varanam Aayiram",
    director: "Harris Jayaraj",
    singer: "Sudha Raghunathan",
    src: "songs/annalmele.mp3",
    cover: "covers/varanamaayiram.jpg",
    tag: "melody"
  },

 {
    title: "Unakaga",
    movie: "Bigil",
    director: "A. R. Rahman",
    singer: "Sreekanth Hariharan & Shreya Ghoshal",
    src: "songs/unakaga.mp3",
    cover: "covers/bigil.jpg",
    tag: "melody"
  }


];


