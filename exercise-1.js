var nama = "Kurama";
var peran = "Penyihir";//Ksatria , Tabib dan Penyihir

if ((nama === "") && (peran === "")){
  console.log("Nama dan Peran harus diisi!");
}
else if ((nama === "") && (peran != "")){
  console.log("Nama harus diisi!");
}
else if (peran === "Ksatria"){
  console.log(" Selamat datang di Dunia Proxytia, " + nama +
"\n Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
}
else if (peran === "Tabib"){
  console.log(" Selamat datang di Dunia Proxytia, " + nama +
"\n Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka");
}
else if (peran === "Penyihir"){
  console.log(" Selamat datang di Dunia Proxytia, " + nama +
"\n Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}
else if ((peran === "") || (peran != "Ksatria") || (peran != "Tabib") || (peran != "Penyihir")){
  console.log("Halo "+nama+", Pilih peranmu sesuai berikut untuk memulai game! \n Ksatria\n Tabib\n Penyihir");
}