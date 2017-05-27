/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'slickcarousel', 'ojs/ojinputtext', 'ojs/ojselectcombobox'],
    function(oj, ko, $) {

        function AboutViewModel() {
            var self = this;
            self.telefono = ko.observable();
            self.nombre = ko.observable();
            self.calle = ko.observable();
            self.noInterior = ko.observable();
            self.noExterior = ko.observable();
            self.entrecalle1 = ko.observable();
            self.entrecalle2 = ko.observable();
            self.colonia = ko.observable();
            self.municipio = ko.observable();
            self.estado = ko.observable();
            self.importe = ko.observable();
            self.cpostal = ko.observable();
            self.arrivalTime = ko.observable();
            self.status = ko.observable();
            self.estacionMap = ko.observable();
            self.contactoComentario = ko.observable();
            self.municipios = ko.observableArray([
                { value: 'Abasolo', label: 'Abasolo' },
                { value: 'Agualeguas', label: 'Agualeguas' },
                { value: 'Allende', label: 'Allende' },
                { value: 'Anáhuac', label: 'Anáhuac' },
                { value: 'Apodaca', label: 'Apodaca' },
                { value: 'Aramberri', label: 'Aramberri' },
                { value: 'Bustamante', label: 'Bustamante' },
                { value: 'Cadereyta Jiménez', label: 'Cadereyta Jiménez' },
                { value: 'Cerralvo', label: 'Cerralvo' },
                { value: 'China', label: 'China' },
                { value: 'Ciénega de Flores', label: 'Ciénega de Flores' },
                { value: 'Doctor Arroyo', label: 'Doctor Arroyo' },
                { value: 'Doctor Coss', label: 'Doctor Coss' },
                { value: 'Doctor González', label: 'Doctor González' },
                { value: 'El Carmen', label: 'El Carmen' },
                { value: 'Galeana', label: 'Galeana' },
                { value: 'García', label: 'García' },
                { value: 'General Bravo', label: 'General Bravo' },
                { value: 'General Escobedo', label: 'General Escobedo' },
                { value: 'General Terán', label: 'General Terán' },
                { value: 'General Treviño', label: 'General Treviño' },
                { value: 'General Zaragoza', label: 'General Zaragoza' },
                { value: 'General Zuazua', label: 'General Zuazua' },
                { value: 'Guadalupe', label: 'Guadalupe' },
                { value: 'Hidalgo', label: 'Hidalgo' },
                { value: 'Higueras', label: 'Higueras' },
                { value: 'Hualahuises', label: 'Hualahuises' },
                { value: 'Iturbide ', label: 'Iturbide ' },
                { value: 'Juárez', label: 'Juárez' },
                { value: 'Lampazos de Naranjo', label: 'Lampazos de Naranjo' },
                { value: 'Linares', label: 'Linares' },
                { value: 'Los Aldamas', label: 'Los Aldamas' },
                { value: 'Los Herreras', label: 'Los Herreras' },
                { value: 'Los Ramones', label: 'Los Ramones' },
                { value: 'Marín', label: 'Marín' },
                { value: 'Melchor Ocampo', label: 'Melchor Ocampo' },
                { value: 'Mier y Noriega', label: 'Mier y Noriega' },
                { value: 'Mina', label: 'Mina' },
                { value: 'Montemorelos', label: 'Montemorelos' },
                { value: 'Monterrey', label: 'Monterrey' },
                { value: 'Parás', label: 'Parás' },
                { value: 'Pesquería', label: 'Pesquería' },
                { value: 'Rayones', label: 'Rayones' },
                { value: 'Sabinas Hidalgo', label: 'Sabinas Hidalgo' },
                { value: 'Salinas Victoria', label: 'Salinas Victoria' },
                { value: 'San Nicolás de los Garza', label: 'San Nicolás de los Garza' },
                { value: 'San Pedro Garza García', label: 'San Pedro Garza García' },
                { value: 'Santa Catarina', label: 'Santa Catarina' },
                { value: 'Santiago', label: 'Santiago' },
                { value: 'Vallecillo ', label: 'Vallecillo ' },
                { value: 'Villaldama', label: 'Villaldama' }
            ]);
            // Below are a subset of the ViewModel methods invoked by the ojModule binding
            // Please reference the ojModule jsDoc for additionaly available methods.

            /**
             * Optional ViewModel method invoked when this ViewModel is about to be
             * used for the View transition.  The application can put data fetch logic
             * here that can return a Promise which will delay the handleAttached function
             * call below until the Promise is resolved.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
             * the promise is resolved
             */
            self.handleActivated = function(info) {
                // Implement if needed
            };

            self.estacionOptionChange = function(event, ui) {
                var trigger = ui.optionMetadata.trigger;
                if (trigger == "option_selected") {
                    var latlngzoom = ui.value[0].split('|');
                    var newzoom = 1 * latlngzoom[2],
                        newlat = 1 * latlngzoom[0],
                        newlng = 1 * latlngzoom[1];
                    self.map.setZoom(newzoom);
                    self.map.setCenter({ lat: newlat, lng: newlng });
                }
            }

            self.submitOrder = function(event, ui) {
                var rowData = {
                    telefono: self.telefono(),
                    nombre: self.nombre(),
                    calle: self.calle(),
                    numero: self.noInterior(),
                    entrecalle1: self.entrecalle1(),
                    entrecalle2: self.entrecalle2(),
                    colonia: self.colonia(),
                    ciudad: self.municipio(),
                    estado: self.estado(),
                    cpostal: self.cpostal(),
                    status: 0
                };


                $.ajax({
                        method: "GET",
                        url: "http://gaslicuadosabinas.com/index.php/preclientes"
                    })
                    .done(function(msg) {
                        alert("Data Saved: " + msg);
                    });



            }

            self.doZIPSearch = function(event, ui) {
                var trigger = ui.optionMetadata.trigger;
                if (trigger == 'enter_pressed' || trigger == 'search_icon_clicked') {
                    var zip = ui.value[0];

                    $.ajax({
                        url: "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" + zip
                    }).then(function(data) {
                        console.log(data);
                    });







                }
            }

            var zoomMap = 10;
            self.estacionesSelect = ko.observableArray([
                { value: [40.6866, -180.3161, zoomMap].join('|'), label: 'Estacion1' },
                { value: [50.6866, -180.3161, zoomMap].join('|'), label: 'Estacion2' },
                { value: [60.6866, -180.3161, zoomMap].join('|'), label: 'Estacion3' },
                { value: [70.6866, -180.3161, zoomMap].join('|'), label: 'Estacion4' },
            ]);

            self.map = undefined;



            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
             */
            self.handleAttached = function(info) {


                $('.single-item').slick();

                self.map = new google.maps.Map(document.getElementById('map-canvas'), {
                    zoom: zoomMap,
                    scrollwheel: false,
                    center: { lat: 25.6866, lng: -100.3161 }
                });
                self.estacionesSelect().forEach(function(data) {
                    var newmarker = new google.maps.Marker({
                        map: self.map,
                        position: { lat: parseInt(data.value.split('|')[0]), lng: parseInt(data.value.split('|')[1]) },
                        title: data.label
                    });
                });




                var sections = $('section');
                var nav = $('#nav-bar');
                var nav_height = $('#navbararea').outerHeight();

                $(window).on('scroll', function() {
                    var cur_pos = $(this).scrollTop();
                    sections.each(function() {
                        var top = this.offsetTop - nav_height;
                        var bottom = top + $(this).outerHeight();
                        if (cur_pos >= top && cur_pos <= bottom) {
                            $('#nav-md').ojNavigationList("option", "selection", this.id);
                        }
                    });
                });

                $("#nav-md").find('a').on('click', function(event) {
                    var $el = $(this);
                    var id = $el.attr('hreff');
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - nav_height + 20
                    }, 800);
                    return false;
                });



                $("#navDrawer").find('a').on('click touchstart', function(event) {
                    console.log(event);
                    var $el = $(this);
                    var id = $el.attr('hreff');
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - nav_height + 20
                    }, 800, function() {
                        var offcanvas = {
                            "selector": "#navDrawer"
                        };

                        oj.OffcanvasUtils.close(offcanvas);
                        // $("#navDrawer").ojNavigationList('ojclose');
                    });
                    return false;
                });





            };


            /**
             * Optional ViewModel method invoked after the bindings are applied on this View. 
             * If the current View is retrieved from cache, the bindings will not be re-applied
             * and this callback will not be invoked.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             */
            self.handleBindingsApplied = function(info) {
                // Implement if needed
            };

            /*
             * Optional ViewModel method invoked after the View is removed from the
             * document DOM.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
             */
            self.handleDetached = function(info) {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new AboutViewModel();
    }
);
