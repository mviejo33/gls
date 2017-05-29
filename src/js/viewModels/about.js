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
            self.estados = ko.observableArray([
                { value: 'Nuevo Leon', label: 'Nuevo León' },
                { value: 'Coahuila', label: 'Coahuila' }


              ]);
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

            var zoomMap = 15
            self.estacionesSelect = ko.observableArray([{
                label: "Apodaca",
                children: [
                    { value: [25.815132, -100.222470, zoomMap].join('|'), label: 'Santa Rosa Mezquital' }
                ]
            }, {
                label: "Escobedo",
                children: [
                    { value: [25.838787, -100.399090, zoomMap].join('|'), label: 'Alianza Real' },
                    { value: [25.793211,-100.293287, zoomMap].join('|'), label: 'Carretera Colombia' },
                    { value: [25.835758, -100.378895, zoomMap].join('|'), label: 'Agropecuaria' },
                    { value: [25.826083, -100.291272, zoomMap].join('|'), label: 'Libramiento Noreste' },
                    { value: [25.775578, -100.317221, zoomMap].join('|'), label: 'Joyas de Anáhuac' },
                    { value: [25.792106, -100.324999, zoomMap].join('|'), label: 'Girasoles' },
                    { value: [25.798314, -100.383207, zoomMap].join('|'), label: 'Santa Marta' }
                ]
            }, {
                label: "García",
                children: [
                    { value: [25.825514, -100.618068, zoomMap].join('|'), label: 'Cerritos' },
                    { value: [25.798306, -100.383194, zoomMap].join('|'), label: 'Carretera Grutas' },
                    { value: [25.799665, -100.607640, zoomMap].join('|'), label: 'Maravillas' }
                ]
            }, {
                label: "Monterrey",
                children: [
                    { value: [25.736670, -100.332320, zoomMap].join('|'), label: 'Topo Chico' },
                    { value: [25.752030, -100.391170, zoomMap].join('|'), label: 'Lincoln' }
                ]
            }, {
                label: "Pesquería",
                children: [
                    { value: [25.789851, -100.069759, zoomMap].join('|'), label: 'Pesquería Ladrillera' }
                ]
            }, {
                label: "Sabinas Hidalgo",
                children: [
                    { value: [26.512724, -100.174341, zoomMap].join('|'), label: 'Carretera Nacional' },
                     { value: [26.447000, -100.158048, zoomMap].join('|'), label: 'Loma Larga' }
                ]
            }, {
                label: "San Nicolás",
                children: [
                    { value: [225.7094399,-100.2792799, zoomMap].join('|'), label: 'Nogalar' }
                ]
            }, {
                label: "Santa Catarina",
                children: [
                    { value: [25.6767652,-100.4304943, zoomMap].join('|'), label: '1 de Mayo' }
                ]
            }, {
                label: "Zuazua",
                children: [
                    { value: [25.896218, -100.129239, zoomMap].join('|'), label: 'Zuazua Laredo' }
                ]
            }, {
                label: "Acuña",
                children: [
                    { value: [29.323346, -100.981641, zoomMap].join('|'), label: 'Cedros' },
                    { value: [29.341008, -100.958738, zoomMap].join('|'), label: 'Granjas' },
                    { value: [29.306761, -100.946732, zoomMap].join('|'), label: 'José de las Fuentes' },
                    { value: [29.288002, -100.898646, zoomMap].join('|'), label: 'Jabalí Zorra' },
                    { value: [29.337957,-100.997072, zoomMap].join('|'), label: 'San Eulalia' },
                    { value: [29.289146,-100.954242, zoomMap].join('|'), label: 'Sur Poniente' }
                ]
            }]);

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
                    zoom: zoomMap-4,
                    scrollwheel: false,
                    center: { lat: 25.6866, lng: -100.3161 }
                });




                self.estacionesSelect().forEach(function(data) {
                  var children = data.children;
                  var i = 0;
                  for(i; i <children.length; i++) {
                    var newmarker = new google.maps.Marker({
                        position: { lat: parseFloat(children[String(i)].value.split('|')[0]), lng: parseFloat(children[String(i)].value.split('|')[1]) },
                        map: self.map,
                        title: data.children[String(i)].label,
                    });
                  }
                    
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
