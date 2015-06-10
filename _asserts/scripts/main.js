$(function() {
    'use strict';
    $.material.init();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    switch (pageName.toLocaleLowerCase()) {
        case "home":
            {
                $('#unclezheng .banner-title').lettering().fitText(0.73);
            };
            break;
        case "about":
            {
                $('#fullpage').fullpage({
                    "navigation": true,
                    navigationTooltips: ['My timeline', 'My skills', 'Contact me'],
                });

                function set($elmt, deg) {
                    "use strict";

                    if ($elmt.id === 'hours' && deg < 180) {
                        deg = deg - 5;
                    }

                    if ($elmt.id === 'minutes' && deg < 180) {
                        deg = deg + 5;
                    } else {
                        deg = deg - 5;
                    }

                    $elmt.style.transform = 'rotate(' + deg + 'deg)';
                    $elmt.style.webkitTransform = 'rotate(' + deg + 'deg)';
                }

                setTimeout(function() {
                    "use strict";
                    setInterval(function() {
                        var $hours = $('#hours');
                        if ($hours.length) {
                            var $minutes = $('#minutes');
                            var d = new Date();
                            var hours = d.getHours();
                            var minutes = d.getMinutes();

                            if (hours >= 6 && hours < 12) {
                                $hours.addClass('left');
                            } else {
                                $hours.addClass('right');
                            }

                            if (minutes <= 30) {
                                $minutes.addClass('back left');
                            } else {
                                $minutes.addClass('left');
                            }

                            var s = d.getSeconds() * 6,
                                m = d.getMinutes() * 6 + (s / 60),
                                h = d.getHours() % 12 / 12 * 360 + (m / 12);
                            $hours.css("transform", "rotate(" + h + "deg)");
                            $minutes.css("transform", "rotate(" + m + "deg)");
                        }
                    }, 1000);
                }, 1000);

                var options = {
                    //segmentShowStroke: false,
                    percentageInnerCutout: 70,
                    //animation: true,
                    animationEasing: 'easeOutQuint',
                    //animateRotate: false,
                    animateScale: true
                };
                var data1 = {
                    labels: ["HTML5 & CSS3", "Sass & Less", "JQuery", "Dojo", "Angular.js", "Bootstrap", "Foundation", "Grunt & Gulp", "Yeaman.io"],
                    datasets: [{
                        label: "My skills",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [95, 85, 90, 85, 80, 90, 80, 80, 80]
                    }]
                };

                var ctx = $("#my-skill1").get(0).getContext("2d");
                var chart = new Chart(ctx);
                chart.Radar(data1, options);

                var data2 = {
                    labels: ["Ruby (Rails)", "C# (.NET)", "Node.js (Express.js)", "PHP (Zend)", "MySQL", "MongoDB", "PostgreSQL / Redis", "Apache / Nginx", "Git / SVN", "Docker / Vagrant", "MacOS & Linux"],
                    datasets: [{
                        label: "My skills",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [85, 85, 70, 60, 90, 70, 75, 80, 85, 65, 80]
                    }]
                };

                var ctx = $("#my-skill2").get(0).getContext("2d");
                var chart = new Chart(ctx);
                chart.Bar(data2, options);


                function createClouds(numClouds) {
                    for (var i = 0; i < numClouds; i++) {
                        $('.clouds').append('<div class="cloud"></div>');

                        var divsize = ((Math.random() * 100)).toFixed();
                        var posLeft = (Math.random() * ($(document).width() - divsize)).toFixed();
                        var posTop = (Math.random() * ($(document).height() - divsize)).toFixed();
                        var child = i + 1;
                        $('.cloud:nth-child(' + child + ')').css({
                            top: posTop + 'px',
                            left: posLeft + 'px',
                            opacity: Math.random(0.5, 1.1),
                            transform: "scale(" + Math.random(1, 2) + ")"
                        });
                    }
                }

                createClouds(30);

                $('.rocket-body').on('click', function() {
                    if ($('.sky').hasClass('show-details')) {
                        return;
                    }
                    $('.rocket').addClass('lift-off');
                    setTimeout(function() {
                        $('.rocket').removeClass('lift-off');
                        $('.sky').addClass('show-details');
                    }, 2100);
                });

                $('.close').on('click', function() {
                    $('.sky').removeClass('show-details');
                });
            };
            break;
    }

    $(".toggle-nav").click(function() {
        $("body").toggleClass("navOpen");
        $("nav-wrapper").toggleClass("open");
        $("#wrap").toggleClass("open");
        $(this).toggleClass("open");
    });

    $('#loader').addClass('hide');
    NProgress.done();
});
