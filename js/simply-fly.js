/*
	 © Mozammel Hoque Shiblu, 2018	 
	 This library is free and open source,
	 anyone is allowed to use and modify with proper courtesy
*/

$.fn.extend({
    isUpper: function () {
        $(this).keyup(function () {
            $(this).val($(this).val().toUpperCase());
        });
        return $(this);
    },
    isNumber: function () {
        $(this).keyup(function () {
            var numberText = $(this).val().replace(/[^0-9\.]/g, '');
            $(this).val(numberText);
        });
        return $(this);
    },
    writesTo: function (element) {
        var myHTML = $.trim($(element).html());
        $(this).keyup(function () {
            var newHtml = $(this).val().toString();
            $(element).text(newHtml);
            $(element).prepend(myHTML);
        });
        return $(this);
    },
    filters: function (table) {
        var box = $(this);
        $(this).keyup(function () {
            var searchText = $.trim($(box).val()).toLowerCase();
            $(table + " tbody tr").each(function () {
                $(this).css("display", $(this).text().toLowerCase().indexOf(searchText) === -1 ? "none" : "");
            });
        });
        return $(this);
    },
    copyText: function () {
        var myText = $(this);
        myText.select();
        document.execCommand("Copy");
        myText.blur();
        return $(this);
    },
    copyContent: function () {
        $("body").append('<input type="text" id="simplifiedcopieraxbnmvb"/>');
        $("#simplifiedcopieraxbnmvb").val($.trim($(this).text()));
        var myText = $("#simplifiedcopieraxbnmvb");
        myText.select();
        document.execCommand("Copy");
        myText.blur();
        $("#simplifiedcopieraxbnmvb").remove();
        return $(this);
    },
    copyHTML: function () {
        $("body").append('<input type="text" id="simplifiedcopieraxbnmvb"/>');
        $("#simplifiedcopieraxbnmvb").val($.trim($(this).html()));
        var myText = $("#simplifiedcopieraxbnmvb");
        myText.select();
        document.execCommand("Copy");
        myText.blur();
        $("#simplifiedcopieraxbnmvb").remove();
        return $(this);
    },
    searchesInto: function (intoElement) {
        $(this).keyup(function () {
            var marker = $(this).val();
            $(".simpleMarkerTextxabnm").replaceWith($(".simpleMarkerTextxabnm").html());
            $(intoElement).html($(intoElement).text().toString().replaceAll(marker, '<span class="simpleMarkerTextxabnm" style="background:rgb(172,218,252);border-radius:4px;">' + marker + '</span>'));
        });
        return $(this);
    },
    columnFilter: function (columnArray) {
        var counter = $(this).children("tbody").children("tr:eq(0)").children("td").length;
        var exception = [];
        if (columnArray != null) {
            exception = (columnArray.except != null) ? columnArray.except : exception;
        }
        var newHtml = "<tr>";
        for (var i = 0; i < counter; i++) {
            newHtml += '<td>';
            if (exception.indexOf(i) === -1) {
                newHtml +=
                    '<p style="text-align:center;"><input id="columnFilterTextxvbnm" class="form-control" style="width:98%;margin:4px;border-radius:2px;border:solid 1px rgba(0,0,0,0.2);padding:1px;" type="text"></p>';
            }
            newHtml += '</td>';
        }
        newHtml += "</tr>";
        $(this).children("tbody").prepend(newHtml);
        var myTable = $(this);
        $(document).on("keyup", "#columnFilterTextxvbnm", function () {
            var searchText = $.trim($(this).val().toString().toLowerCase());
            var textIndex = $(myTable).children("tbody").children("tr:eq(0)").children(" td").index($(this).parent().parent());
            var i = 0;
            $(myTable).children("tbody").children("tr").each(function () {
                if (i != 0) {
                    $(this).css("display", $.trim($(this).children("td:eq(" + textIndex + ")").text().toLowerCase().indexOf(searchText)) !=
                        -1 ? "" : "none");
                }
                i++;
            });
        });
        return $(this);
    },
    ediTable: function (anArray) {
        var except = [];
        if (anArray != null) {
            if (anArray.except != null) {
                except = anArray.except;
            }
        }
        $(window).click(function (e) {
            var target = $(e.target);
            if (!target.is("#ediTableTextFieldxvbnm")) {
                var input = $.trim($("#ediTableTextFieldxvbnm").val());
                $("#ediTableTextFieldxvbnm").after(input).remove();
            }
        });
        var editHtml = '<input type="text" id="ediTableTextFieldxvbnm" class="form-control"/>';
        $(this).children("tbody").children("tr").children("td").click(function (event) {
            var index = $(this).index();
            if (except.indexOf(index) != -1) {
                return;
            }
            if ($(this).find("#ediTableTextFieldxvbnm").length > 0) { return; }
            var target = $(event.target);
            if (!target.is("#ediTableTextFieldxvbnm")) {
                var input = $.trim($("#ediTableTextFieldxvbnm").val());
                $("#ediTableTextFieldxvbnm").after(input).remove();
            }
            var html = $.trim($(this).html());
            $(this).html(editHtml);
            $("#ediTableTextFieldxvbnm").val(html);
            $("#ediTableTextFieldxvbnm").focus();
            event.stopPropagation();
        });
        return $(this);
    },
    showProgress: function (progressArray) {
        var progHeight = "6px";
        var progBackground = "rgb(19,62,109)";
        var opacity = 1;
        var borderRadius = "0px";
        var zIndex = 1;
        if (progressArray != null) {
            progHeight = (progressArray.height != null) ? progressArray.height : progHeight;
            progBackground = (progressArray.color != null) ? progressArray.color : progBackground;
            opacity = (progressArray.opacity != null) ? progressArray.opacity : opacity;
            borderRadius = (progressArray.borderRadius != null) ? progressArray.borderRadius : borderRadius;
            zIndex = (progressArray.zIndex != null) ? progressArray.zIndex : zIndex;
        }
        if ($(this).is(document) || $(this).is(window) || $(this).is("body")) {
            window.scrollTo(0, 0);
            var dochheight = $(document).height();
            $("body").prepend('<div class="scrollerxvbnm"></div>');
            $("body>.scrollerxvbnm:eq(0)").css({
                "width": 0,
                "height": progHeight,
                "background": progBackground,
                "border-radius": borderRadius,
                "opacity": opacity,
                "z-index": zIndex
            });
            $(document).scroll(function () {
                var scroll = $(document).scrollTop();
                var scrollerWidth = scroll / (dochheight - window.innerHeight) * 100;
                $("body>.scrollerxvbnm:eq(0)").css({
                    "position": "fixed",
                    "top": 0,
                    "width": scrollerWidth + "%"
                });
            });
        } else {
            $(this).scrollTop(0);
            var height = $(this)[0].scrollHeight;
            var up = $(this).position().top;
            var left = $(this).position().left;
            $(this).parent().css("position", "relative");
            $(this).parent().append('<div class="scrollerxvbnm"></div>');
            $(this).parent().children(".scrollerxvbnm:last-child").css({
                "width": 0,
                "height": progHeight,
                "background": progBackground,
                "border-radius": borderRadius,
                "opacity": opacity,
                "position": "absolute",
                "left": left,
                "top": up,
                "z-index": zIndex
            });
            var element = $(this);
            $(this).scroll(function () {
                var scroll = $(this).scrollTop();
                var scrollerWidth = scroll / (height - $(this).innerHeight()) * $(this).width();
                $(this).parent().children(".scrollerxvbnm:last-child").css({
                    "width": scrollerWidth + "px"
                });
            });
        }
        return $(this);
    },
    fixedOnScroll: function (fixedArray) {
        var element = $(this);
        var top = $(this).offset().top;
        var zIndex = 999999;
        if (fixedArray != null) {
            zIndex = (fixedArray.zIndex != null) ? fixedArray.zIndex : zIndex;
        }
        $(document).scroll(function () {
            element.css({
                "position": "fixed",
                "top": ($(document).scrollTop() >= top) ? 0 : top - $(document).scrollTop(),
                "z-index": zIndex
            });
            element.next().css("margin-top", element.outerHeight());
        });
        return $(this);
    },
    showConfirm: function (confirmArray) {
        var mainButton = $(this);
        var heading = "Message";
        var message = "Are you sure?";
        var okButton = "Yes";
        var cancelButton = "No";
        if (confirmArray != null) {
            heading = (confirmArray.heading != null) ? confirmArray.heading : heading;
            message = (confirmArray.message != null) ? confirmArray.message : message;
            okButton = (confirmArray.okButton != null) ? confirmArray.okButton : okButton;
            cancelButton = (confirmArray.cancelButton != null) ? confirmArray.cancelButton : cancelButton;
        }
        var confirmboxvbnm = '<div class="confirmboxvbnm" style="width: 320px;height:auto;min-height: 180px;position: fixed;border-radius: 4px;' +
            'border: solid 1px rgba(32, 111, 185,0.6); font-family: verdana; background: white;display:none;">' +
            '<div class="confirm-heading" style="padding: 3px; color: white; background: linear-gradient(to top, rgb(32, 111, 185), rgba(32,111,185,0.7));">' +
            '<h4>&nbsp;&nbsp;' + heading + '</h4></div><div class="confirm-body" style="padding: 12px;">' +
            '<br/><center><p class="confirm-message" style="font-size:16px;">' + message + '</p></center></div><div style="position: absolute; right: 10px; bottom: 11px;">' +
            '<p class="confirmxvbnm-ok" style="background:  linear-gradient(to top, rgb(32, 111, 185), rgba(32,111,185,0.7)); color: white; padding: 6px 10px; display: inline; border-radius: 3px; cursor: pointer;">' +
            okButton + '</p>&nbsp;&nbsp;<p class="confirmxvbnm-cancel" style="background:  linear-gradient(to top, rgba(0,0,0,0.16), white);padding: 5px 10px;display: inline; border-radius: 3px; border: solid 1px rgba(0,0,0,0.06); cursor: pointer;">' +
            cancelButton + '</p></div></div>';
        $("body").append(confirmboxvbnm);
        var isentit = false;
        $(this).click(function (e) {			
        $(".confirmboxvbnm").css("top", ((window.innerHeight - $(".confirmboxvbnm").height()) / 2) + "px")
							.css("left", ((window.innerWidth - $(".confirmboxvbnm").width()) / 2) + "px");
            if (!isentit) {
                e.preventDefault();
                $(".confirmboxvbnm").show();
            }
            isentit = false;
        });
        $(document).on('click', ".confirmxvbnm-ok", function () {
            isentit = true;
            $(".confirmboxvbnm").hide();
            $(mainButton)[0].click();
        });
        $(document).on('click', ".confirmxvbnm-cancel", function () {
            $(".confirmboxvbnm").hide();
        });
        return $(this);
    },
	slideOnAppear:function(positionArray) {	
			$(this).each(function(){
				var topMost = $(this).offset().top + 20;
            var element = $(this);
            var from = "right";
            var time = 800;
            if (positionArray != null) {
                from = (positionArray.from != null) ? positionArray.from : from;
                time = (positionArray.time != null) ? positionArray.time : time;
            }
            $(this).css({
                "position": "relative",
                "top": 0,
				"opacity":0
            });
            $(this).css((from === "right")?"left":"right", window.innerWidth);
            var a = 0;
            if ($(this).offset().top < window.innerHeight) {
                setTimeout(slideIt(),900);
            } else if($(this).offset().top<($(document).scrollTop()+window.innerHeight)){
				setTimeout(slideIt(),900);               
            }else{
				$(document).scroll(function () {
                    $(".scrollparagraph").html($(document).scrollTop());
                    if ($(this).scrollTop() + window.innerHeight >= topMost && a === 0) {
                        setTimeout(slideIt(),900);
                        a = 1;
                    }
                });
			}
			function slideIt(){
					setTimeout(function(){
						if (from === "right") {
							    $(element).animate({ left: 0, opacity: 1 }, time);
							} else {
							    $(element).animate({ right: 0, opacity: 1 }, time);
							}
					},600);
			}	
			});
        }
});

String.prototype.replaceAll = function (oldOne, newOne) {
    return $.trim(this).split(oldOne).join(newOne);
};

String.prototype.formatDateFrom = function (dateParameter) {
    var dateString = $.trim(this.toString());
    dateString = dateString.replaceAll("-", "/").replaceAll(".", "/").replaceAll("_", "/");
    dateParameter = $.trim(dateParameter).toLowerCase();
    var month = "";
    var day = "";
    var year = "";
    switch (dateParameter) {
    case "mdy": month = dateString.substr(0, 2);
        day = dateString.substr(3, 2);
        year = dateString.substr(6, 4);
        break;
    case "dmy": day = dateString.substr(0, 2);
        month = dateString.substr(3, 2);
        year = dateString.substr(6, 4);
        break;
    case "ymd": day = dateString.substr(8, 2);
        month = dateString.substr(5, 2);
        year = dateString.substr(0, 4);
        break;
    case "ydm": month = dateString.substr(8, 2);
        day = dateString.substr(5, 2);
        year = dateString.substr(0, 4);
        break;
    default: return dateString;
        break;
    }
    month = $.trim(month);
    day = $.trim(day);
    year = $.trim(year);
    dateString = day + "/" + month + "/" + year;
    if (day.indexOf("/") != -1 || month.indexOf("/") != -1 || year.indexOf("/") != -1) {
        return $.trim(this.toString());
    }
    var oldDateArray = ["/01/", "/02/", "/03/", "/04/", "/05/", "/06/",
        "/07/", "/08/", "/09/", "/10/", "/11/", "/12/"];
    var newDateArray = ["-Jan-", "-Feb-", "-Mar-", "-Apr-", "-May-", "-Jun-",
        "-Jul-", "-Aug-", "-Sep-", "-Oct-", "-Nov-", "-Dec-"];
    for (var i = 0; i < oldDateArray.length; i++) {
        dateString = dateString.replace(oldDateArray[i], newDateArray[i]);
    }
    return dateString;
}

function getTime(formatString) {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    var ampm = "";
    if (formatString != null && (formatString.toLowerCase() === "ampm" || formatString.toLowerCase() === "am/pm")) {
        ampm = (hour >= 12) ? "PM" : "AM";
        hour = (hour > 12) ? hour - 12 : hour;
        hour = (hour === 0) ? 12 : hour;
        hour = (minute < 10) ? "0" + hour : hour;
    }
    return $.trim(hour + ":" + minute + ":" + second + " " + ampm);
}

function datesBetween(start, end) {
    var dateArray = new Array();
    var date = new Date(start);
    var endDate = new Date(end);
    while (date <= endDate) {
        dateArray.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return dateArray;
}

Array.prototype.getSum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    } return sum;
}

Array.prototype.getAverage = function () {
    return this.getSum() / this.length;
}

Array.prototype.getMin = function () {
    var min = this[0];
    for (var i = 0; i < this.length; i++) {
        if (this[i] < min) { min = this[i]; }
    } return min;
}

Array.prototype.getMax = function () {
    var max = this[0];
    for (var i = 0; i < this.length; i++) {
        if (this[i] > max) { max = this[i]; }
    } return max;
}

Array.prototype.clean = function (deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === deleteValue) {
            this.splice(i, 1);
            i--;
        }
    } return this;
}

Array.prototype.separateWith = function (splitElement) {
    var arrayString = "";
    var j = this.length - 1;
    for (var i = 0; i < this.length; i++) {
        arrayString += (i === j) ? this[i] : (this[i] + splitElement);
    } return arrayString;
}
