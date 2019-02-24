function panggilFilterParameter(value) {
  var arr =[
    {negara: 'Indonesia', benua: 'Asia'},
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'Spanyol',benua: 'Eropa'},
    {negara: 'Korea',benua: 'Asia'},
    {negara: 'Portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat',benua:'Amerika'}
  ];

  var benuaEropa = arr.filter((item) =>{
  return item.benua === 'Eropa';
  })

  var benuaAsia = arr.filter(function(item) {
    return item.benua === 'Asia';
  })
  console.log('Benua Eropa', benuaEropa);
  console.log();
  console.log('Benua Asia', benuaAsia);
}

panggilFilterParameter()
