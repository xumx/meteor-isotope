Package.describe({
  summary: "Isotope, the jQuery plugin for dynamic layout filtering and sorting, repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = 'client';
  api.use('jquery', where);
  api.add_files('isotope/jquery.isotope.js', where);
  api.add_files('isotope/js/jquery.infinitescroll.min.js', where);
  api.add_files('isotope/js/jquery.ba-bbq.min.js', where);
  
  api.add_files('isotope/css/style.css', where);
});