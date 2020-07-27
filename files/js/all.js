var A;

A = {
  //=================================================
  // ПЕРМЕННЫЕ САЙТА
  //=================================================
  //-- A.w - ССЫЛКА НА ОКНО С САЙТОМ
  w: $(window),
  //-- A.dropper - ПОДДЕРЖИВАЕТСЯ ЛИ DRAG AND DROP
  dropper: false,
  //-- A.fff - функция для вывода в лог получаемых данных через api
  logApi: function(data, cd) {
    return console.log(data, cd);
  },
  reload: function() {
    return window.location.reload();
  },
  display: function(x, y) {
    if (y) {
      return $(x).show();
    } else {
      return $(x).hide();
    }
  },
  disabled: function(x, y) {
    if (y) {
      return $(x).removeAttr('disabled');
    } else {
      return $(x).attr('disabled', true);
    }
  },
  notify: function(x, html = '') {
    return x.queue(function() {
      x.html(html).show(300);
      return x.dequeue();
    });
  },
  stopPropogation: function(e) {
    return e.stopPropagation();
  },
  isMobile: function() {
    return A.w.width() < 520;
  },
  toggleInfoText: function(id) {
    var $t;
    $t = $("#info_text_" + id);
    $t.toggleClass('open');
    if (!$t.hasClass('open')) {
      return $t.hide(300);
    } else {
      return $t.show(300);
    }
  },
  reach: function(x) {
    return typeof yaCounter45320307 !== "undefined" && yaCounter45320307 !== null ? yaCounter45320307.reachGoal(x) : void 0;
  },
  mail: /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
  testMail: function(x) {
    return A.mail.test(x);
  },
  serialize: function(form) {
    var a, i, j, len, o;
    a = $(form).serializeArray();
    o = {};
    for (j = 0, len = a.length; j < len; j++) {
      i = a[j];
      o[i.name] = i.value;
    }
    return o;
  },
  htmlspecialchars: function(str) {
    if (typeof str === "string") {
      str = str.replace(/&/g, "&amp;");
      str = str.replace(/"/g, '&#34;');
      str = str.replace(/'/g, "&#039;");
      str = str.replace(/</g, "<");
      str = str.replace(/>/g, ">");
    }
    return str;
  },
  MFNL: function(x, url, callback, data, cd) {
    var $x;
    $x = $(x);
    $x.ajaxForm();
    $x.submit(function() {
      var $b, $b2, $i, d;
      A.I.waitInput($i = $("input[type=submit]", $x));
      A.I.waitButton($b = $("button[type=submit]", $x));
      A.I.waitButton($b2 = $("button[type=button]", $x));
      if (typeof data === 'function') {
        d = data();
      } else {
        d = data;
      }
      console.log(data, url);
      return $(this).ajaxSubmit({
        url: url,
        data: d,
        type: "POST",
        method: "POST",
        success: function(data) {
          A.I.unwaitInput($i);
          A.I.unwaitButton($b);
          A.I.unwaitButton($b2);
          console.log(data);
          return typeof callback === "function" ? callback(data, cd) : void 0;
        },
        error: function() {
          console.log('error');
          A.I.unwaitInput($i);
          A.I.unwaitButton($b);
          return A.I.unwaitButton($b2);
        }
      });
    });
    return $(x).removeClass(x);
  },
  //-------------------------------------------------
  // A.createRequestObject - Создаёт новый RequestObject
  //-------------------------------------------------
  createRequestObject: function() {
    if (typeof XMLHttpRequest === 'undefined') {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (error) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (error) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (error) {}
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (error) {}
      throw new Error("This browser does not support XMLHttpRequest.");
    }
    return new XMLHttpRequest();
  },
  domen: '',
  //-------------------------------------------------
  // A.setCookie - НАЗНАЧЕНИЕ ПЕЧЕНЕК
  //-------------------------------------------------
  setCookie: function(k, v, date) {
    var c, cook, domain;
    domain = ' domain=*.' + window.location.host + ';';
    domain = ' domain=.' + A.domen + ';';
    cook = k + "=" + v + '; expires=' + new Date(date ? date : new Date().getTime() + 5184000000).toGMTString() + '; path=/;';
    document.cookie = cook + domain;
    c = A.getCookie('k');
    if (c !== v) {
      document.cookie = cook;
    }
    return cook;
  },
  getCookie: function(name) {
    var pattern, regexp;
    pattern = "(?:; )?" + name + "=([^;]*);?";
    regexp = new RegExp(pattern);
    if (regexp.test(document.cookie)) {
      return decodeURIComponent(RegExp["$1"]);
    }
    return false;
  },
  //-------------------------------------------------
  // A.init - ИНИЦИАЛИЗАЦИЯ САЙТА
  //-------------------------------------------------
  init: function() {
    A.dropper = !(typeof window.FileReader === 'undefined');
    A.content = $("#content");
    A.content_padding = 90;
    A.P.init();
    A.R.ready();
    A.W.init();
    A.resize();
    return A.scroll();
  },
  /*
  $('.fancy').fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });
  */
  ready: function() {
    //A.resize();
    A.w.resize(function() {
      return A.resize();
    });
    A.w.scroll(function() {
      return A.scroll();
    });
    A.P.ready();
    A.F.ready();
    return A.UI.ready();
  },
  //-------------------------------------------------
  // A.resize - Изменение размеров страницы
  //-------------------------------------------------
  resize: function() {
    return A.P.resize();
  },
  //-------------------------------------------------
  // A.scroll - Изменение размеров страницы
  //-------------------------------------------------
  scroll: function() {
    return A.P.scroll();
  }
};

$(document).ready(function() {
  $('.advert, .scroll').on('click', 'a', function(event) {
    var $t, id, top;
    id = $(this).attr('href').substr(1);
    $t = $(id);
    if ($t.length > 0) {
      event.preventDefault();
      top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 800);
    }
  });
  $('.btn').click(function() {
    $('.btn, .std .price span, .std .price small, .pro .price span, .pro .price small').toggleClass('select');
    $('.val').toggleClass('elected');
  });
  $('.open-mob').click(function() {
    //Мобильное меню открыть
    $('.wrap').addClass('slide_content');
    $('#d_mobile_head').addClass('slide_content');
    $('#hide-menu').removeClass('slide_menu');
    $('body').css('overflow', 'hidden');
    $('.wrap').css('opacity', '0.5');
    $('#d_mobile_head').css('opacity', '0.5');
    $('#close-hover').css('display', 'block');
    $('#hide-menu').css('box-shadow', '-3px 0 22px #7a7c8a');
  });
  $('.close-menu').click(function() {
    //Мобильное меню закрыть при клике на кнопку
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
  $('#close-hover').click(function() {
    //Мобильное меню закрыть при клике на сдвинутый wrap
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
  $('.scroll').click(function() {
    //Мобильное меню закрыть при клике на ссылку
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
});

$(window).ready(function() {
  API.init();
  A.ready();
  return A.init();
});

//$(window).load ()->
//  A.init();

var API;

API = {
  init: function() {
    return API.uinit(API.U, '/api/');
  },
  isEmpty: function(o) {
    var i;
    for (i in o) {
      return false;
    }
    return true;
  },
  uinit: function(x, path) {
    var i, results;
    results = [];
    for (i in x) {
      if (i === "url") {
        continue;
      }
      if (!API.isEmpty[x[i]]) {
        API.uinit(x[i], path + i + '/');
      }
      if (x[i] === "") {
        x[i] = path + i + '/';
      }
      results.push(x[i].url = path + i + '/');
    }
    return results;
  },
  U: {
    tid: {
      uadd: "",
      is_pixel: ""
    },
    fdata: {
      uadd: "",
      utable: "",
      remove: "",
      status: ""
    },
    check: {
      makeCheck: "",
      makeCheckBySum: "",
      choose_price: ""
    },
    round: {
      img: ''
    },
    one_report: {
      send: ""
    },
    account: {
      remind: "",
      newpass: "",
      uadd: "",
      uexit: "",
      login: "",
      text_id: "",
      update_data: "",
      ava: "",
      bg: "",
      bg2: "",
      icon: "",
      form: {
        auth: "",
        reg: ""
      }
    },
    item: {
      uupdate: '',
      udelete: '',
      image: '',
      update: {
        pos: ''
      },
      get: {
        edit: '',
        order: '',
        thx: ''
      }
    },
    order: {
      uadd: '',
      utable: "",
      remove: "",
      status: ""
    },
    link: {
      stat: "",
      update: {
        pos: ""
      },
      uupdate: "",
      uadd: "",
      udelete: "",
      get: {
        edit: "",
        shop: ""
      },
      mylist: '',
      mypubliclist: '',
      myeditlist: '',
      editform: '',
      togglevis: ''
    },
    spell: {
      spell: ""
    },
    login: {
      login: "",
      exit: "",
      exit_admin: "",
      admin: "",
      admin_login: ""
    },
    get: {
      form: {
        recall: "",
        map: "",
        advantages: "",
        map: "",
        about: "",
        partners: "",
        providers: "",
        contacts: "",
        calculator: "",
        docs: "",
        services: "",
        directions: "",
        projects: ""
      }
    },
    buy: {
      product: '',
      get: {
        buy: '',
        add_balance: '',
        buy_success: ''
      }
    }
  },
  GET: {
    // u - url
    // d - data
    // c - callback
    // cd - callback data
    r: function(u, d, c, cd) {
      d['nocache'] = (new Date()).getTime();
      return $.ajax({
        url: u,
        type: "POST",
        dataType: d.dataType !== void 0 ? d.dataType : "html",
        data: d,
        success: function(data) {
          if (c !== void 0) {
            return c(data, cd);
          }
        },
        error: function() {
          return c({
            error: 1
          }, cd);
        }
      });
    }
  }
};

A.DELETE = {
  init: function() {}
};

A.DROPPER = {
  id: 0,
  getNextId: function() {
    return A.DROPPER.id++;
  },
  create: function(x, url, data) {
    var res;
    res = new Array();
    if (A.dropper) {
      $(x).each(function() {
        var c;
        console.log(x, url);
        c = function(x) {
          var isMulti, o;
          isMulti = ((data != null ? data.multi : void 0) != null) && data.multi ? true : false;
          o = {};
          o.logo = $(x);
          o.ulogo = $(".over", o.logo);
          o.hlogo = $(".drop_help", o.logo);
          o.plogo = $(".drop_preview", o.logo);
          o.file = $("input[type=file]", o.logo);
          if (o.file.length === 0) {
            o.file = $('<input ' + (isMulti ? 'multiple' : '') + ' type="file" value="Выбрать файлы" name="imgs" />');
            o.hlogo.append(o.file);
            o.hlogo.append($('<span class="choose" onclick="$(this).prev().click()">Выбрать файл' + (isMulti ? 'ы' : '') + '</span>'));
          }
          o.file.attr('id', 'file_dropper_id_' + A.DROPPER.getNextId()).change(function() {
            var f;
            //console.log('changes')
            f = document.getElementById(o.file.attr('id'));
            //console.log(f.files)
            return o.sendFiles(f.files);
          });
          //console.log(o.file)
          //console.log(data)

          //if o.logo.hasClass('have')
          //o.hlogo.hide();

          //console.log 'dragenter'
          o.logo.bind('dragenter', function() {
            //console.log 'dragentered'
            o.logo.addClass('hover');
            return false;
          });
          o.sendFiles = function(files) {
            var bar, f, file, ref, ref1;
            o.loaded = 0;
            o.links = new Array();
            o.count = files.length;
            o.plogo.children().remove();
            for (file in files) {
              f = files[file];
              if (f !== void 0 && f.type !== void 0 && ((f != null ? (ref = f.type) != null ? ref.match(/image.*/) : void 0 : void 0) || (f != null ? (ref1 = f.type) != null ? ref1.match(/video.*/) : void 0 : void 0))) {
                //console.log(f)
                bar = function(f) {
                  var b;
                  b = {};
                  o.hlogo.hide();
                  o.plogo.show();
                  b.$div = $('<div id="ulogo"/>').text(file.name).appendTo(o.plogo);
                  b.$prog = $('<div/>').addClass('progress').appendTo(b.$div);
                  b.$bar = $('<div/>').addClass('bar').appendTo(b.$prog);
                  b.$btxt = $('<div/>').addClass('bartxt').text('0%').appendTo(b.$prog);
                  b.flogo = file;
                  b.reader = new FileReader();
                  b.reader.onloadend = function(e) {
                    var body, boundary, d, xhr;
                    //aImg.attr('src', e.target.result);
                    // ... обновляем инфу о выбранных файлах ...
                    xhr = A.createRequestObject();
                    xhr.upload.addEventListener("progress", function(e) {
                      var pro;
                      if (e.lengthComputable) {
                        pro = (e.loaded * 100) / e.total;
                        b.$bar.css({
                          width: pro + "%"
                        });
                        return b.$btxt.text((pro.toFixed(0)) + "%");
                      }
                    //console.log(pro)
                    }, false);
                    xhr.onreadystatechange = function() {
                      if (this.readyState === 4) {
                        if (this.status === 200) {
                          if (((data != null ? data.multi : void 0) != null) && data.multi) {
                            o.loaded++;
                            if (this.responseText !== "error") {
                              o.links.push(this.responseText);
                            } else {

                            }
                            // DOME выдавать какую-нибудь ошибку
                            //console.log(o.loaded,o.count)
                            if (((data != null ? data.callback : void 0) != null)) {
                              data.callback(this.responseText, data.cd);
                            }
                            if (o.loaded === o.count) {
                              if ((data != null ? data.callbackAll : void 0) != null) {
                                return data.callbackAll(o.links, data.cd);
                              } else {
                                o.plogo.hide();
                                return o.hlogo.show();
                              }
                            }
                          } else {
                            o.logo.css("background-image", 'url("' + this.responseText + '")').addClass('have');
                            if (((data != null ? data.callback : void 0) != null)) {
                              data.callback(this.responseText, data.cd);
                            } else {

                            }
                            //o.logo.css("background-image",'url("'+this.responseText+'")').addClass('have');
                            return o.plogo.hide();
                          }
                        } else {

                        }
                      }
                    };
                    //* ... ошибка! ... */
                    //console.log(this.responseText)
                    // ... все ок! смотрим в this.responseText ... */
                    xhr.open("POST", url);
                    boundary = "xxxxxxxxx";
                    xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + boundary);
                    xhr.setRequestHeader("Cache-Control", "no-cache");
                    body = "--" + boundary + "\r\n";
                    body += "Content-Disposition: form-data; name='myFile'; filename='" + f.name + "'\r\n";
                    body += 'Content-Type: ' + f.type + '\r\n\r\n';
                    body += b.reader.result + "\r\n";
                    body += "--" + boundary + "\r\n";
                    for (d in data) {
                      //console.log(data,data[d])
                      body += 'Content-Disposition: form-data; name="' + d + '"' + "\r\n\r\n";
                      body += data[d] + "\r\n";
                      body += "--" + boundary + "\r\n";
                    }
                    //console.log(body)
                    if (xhr.sendAsBinary) {
                      // только для firefox
                      return xhr.sendAsBinary(body);
                    } else {
                      // chrome (так гласит спецификация W3C)
                      return xhr.send(body);
                    }
                  };
                  return b.reader.readAsDataURL(f);
                };
                bar(f);
              }
              if (isMulti) {
                continue;
              } else {
                break;
              }
            }
            //break;
            return false;
          };
          o.ulogo.bind({
            dragover: function() {
              return false;
            },
            dragleave: function() {
              o.logo.removeClass('hover');
              return false;
            },
            drop: function(e) {
              o.logo.removeClass('hover');
              o.files = e.originalEvent.dataTransfer.files;
              o.sendFiles(o.files);
              //console.log(logo)
              //console.log(files)
              return false;
            }
          });
          return o;
        };
        return res.push(c(this));
      });
    }
    return res;
  }
};

A.F = {
  fdataPage: 0,
  fdataStatus: 0,
  orderPage: 0,
  orderStatus: 0,
  ready: function() {
    A.F.report = $("#report");
    A.F.res = $("#res");
    return A.F.loader = $("#loader");
  },
  exit: function() {
    A.setCookie('uid', '---');
    A.setCookie('uim', '---');
    return window.location.href = "/";
  },
  //API.GET.r API.U.account.uexit, {}, A.reload
  reg: function(f) {
    var $f, $pass, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      name: $.trim($("input[name=name]", $f).val()),
      email: $.trim($("input[name=email]", $f).val()),
      pass: $.trim(($pass = $("input[name=pass]", $f)).val())
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else if (!A.mail.test(s.email)) {
      A.notify($res, 'Введите корректный email');
    } else if (s.pass === "" && $pass.length > 0) {
      A.notify($res, 'Введите пароль');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      grecaptcha.ready(function() {
        return grecaptcha.execute('6LdUWu8UAAAAAPvOM_cyNLwDN7J2t8ct0eqcN_QZ', {
          action: 'login'
        }).then(function(token) {
          s._google_captcha = token;
          return API.GET.r(API.U.account.uadd, s, A.F.aAuth, {
            f: $f,
            r: $res,
            reg: true
          });
        });
      });
    }
    //API.GET.r API.U.account.uadd, s, A.F.aAuth,{f:$f,r:$res,reg:true}
    return false;
  },
  aAuth: function(data, cd) {
    //console.log data
    A.I.unwaitButton($("button", cd.f));
    A.I.unwaitInput($("input[type=submit]", cd.f));
    if (data.e === 1) {
      return A.notify(cd.r, data.m);
    } else {
      if (cd.reg === true) {
        A.reach('reg');
      }
      //console.log data
      return setTimeout(function() {
        if (data.p !== void 0) {
          A.setCookie('uid', data.p.uid);
          A.setCookie('uim', data.p.uim);
        }
        return window.location.href = "/lk/";
      }, 3001);
    }
  },
  auth: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      email: $.trim($("input[name=email]", $f).val()),
      pass: $.trim($("input[name=pass]", $f).val()),
      nocache: (new Date()).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else if (s.pass === "") {
      A.notify($res, 'Введите пароль');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.login, s, A.F.aAuth, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  remind: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      email: $.trim($("input[name=email]", $f).val()),
      nocache: (new Date()).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.remind, s, A.F.aRemind, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  newPass: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      pass1: $.trim($("input[name=pass1]", $f).val()),
      pass2: $.trim($("input[name=pass2]", $f).val()),
      key: $.trim($("input[name=key]", $f).val()),
      hash: $.trim($("input[name=hash]", $f).val()),
      id: $.trim($("input[name=id]", $f).val()),
      nocache: (new Date()).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.pass1 === "") {
      A.notify($res, 'Введите пароль');
    } else if (s.pass2 === "") {
      A.notify($res, 'Повторите пароль');
    } else if (s.pass1 !== s.pass2) {
      A.notify($res, 'Пароли должны совпадать');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.newpass, s, A.F.aRemind, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  aRemind: function(data, cd) {
    A.I.unwaitButton($("button", cd.f));
    A.I.unwaitInput($("input[type=submit]", cd.f));
    return A.notify(cd.r, data.m);
  },
  beforeAngularSubscribe: function(f) {
    var $r, e;
    e = $.trim($("input[name=email]", $(f)).val());
    $r = $(".res", $(f)).hide(300);
    if (A.mail.test(e)) {
      return true;
    } else {
      A.notify($r, "Введите корректный email");
      return false;
    }
  },
  text_id: function(f) {
    var $b, $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      text_id: $.trim($("input[name=text_id]", $f).val())
    };
    $res = $(".res", $f).hide(300);
    if (s.text_id === "") {
      A.notify($res, 'Введите адрес странички');
    } else {
      A.I.waitButton($b = $("button", $f));
      API.GET.r(API.U.account.text_id, s, A.F.aText_id, {
        b: $b,
        f: $f,
        r: $res
      });
    }
    return false;
  },
  aText_id: function(data, cd) {
    A.I.unwaitButton(cd.b);
    $("input[name=text_id]").val(data.text_id);
    if (data.e === 1) {
      return A.notify(cd.r, data.m);
    } else {
      return A.reload();
    }
  },
  updateData: function(f) {
    var $b, $f, $res, s;
    $f = $(f);
    s = A.serialize($f);
    s.tid = A.F.tid;
    s.dataType = "JSON";
    $res = $(".res", $f).hide(300);
    A.I.waitButton($b = $("button", $f));
    API.GET.r(API.U.account.update_data, s, A.F.aUpdateData, {
      b: $b,
      f: $f,
      r: $res
    });
    return false;
  },
  aUpdateData: function(data, cd) {
    A.I.unwaitButton(cd.b);
    switch (data.col) {
      case 'name':
        $("#name").html(data.val);
        return $(".inp_name").html(data.val);
      case 'hello':
        $("#hello").html(data.val);
        return $(".inp_hello").html(data.val);
      case 'text2':
        $("#text2").html(data.val);
        return $(".inp_text2").html(data.val);
      case 'link':
        if (parseInt(data.e) === 1) {
          return A.notify(cd.r, data.m);
        } else {
          A.notify(cd.r, data.m);
          return setTimeout(function() {
            return window.location.href = data.link;
          }, 1000);
        }
    }
  },
  initEditPage: function() {
    A.MFNL('.mfnl', API.U.account.ava, A.F.aUploadAva, {
      tid: A.F.tid,
      folder: 'ava'
    }, {
      c: ".mfnl"
    });
    A.MFNL('.mfnl2', API.U.account.bg, A.F.aUploadBg, {
      tid: A.F.tid,
      folder: 'ava'
    }, {
      c: ".mfnl2"
    });
    A.MFNL('.mfnl3', API.U.account.bg2, A.F.aUploadBg2, {
      tid: A.F.tid,
      folder: 'ava'
    }, {
      c: ".mfnl3"
    });
    A.MFNL('.mfnl4', API.U.account.icon, A.F.aUploadIcon, {
      tid: A.F.tid,
      folder: 'ava'
    }, {
      c: ".mfnl4"
    });
    $('[class^="mfnl"] input[type=file]').change(function() {
      return $(this).parent().submit();
    });
    return $("#toggle_logo_footer").click(function() {
      var $t, is_footer;
      $t = $(this);
      is_footer = $t.hasClass('selected');
      return API.GET.r(API.U.account.update_data, {
        col: 'is_footer_icon',
        val: (is_footer ? 1 : 0),
        tid: A.F.tid,
        dataType: "JSON"
      }, function(data) {
        console.log(data);
        if (!data.buyed) {
          A.W.openBuy(data.buy_id);
          return $t.removeClass('selected');
        } else {
          return A.F.justSetLogoFooter(is_footer);
        }
      });
    });
  },
  justSetLogoFooter: function(x = true) {
    A.display($('.label_top'), !x);
    return A.display($('.label_bottom').parent(), x);
  },
  aUploadAva: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.e === 1) {
      A.notify($r, data.m);
    }
    if ((data != null ? data.link : void 0) != null) {
      return $(".ava,.ava_upload").css('background-image', 'url(' + data.link + ')');
    }
  },
  aUploadItemImage: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = cd.r;
    if (data.e === 1) {
      A.notify($r, data.m);
    }
    if ((data != null ? data.link : void 0) != null) {
      return $("#item_image").attr('src', data.link);
    }
  },
  aUploadBg: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.need_buy !== void 0) {
      A.W.openBuy(data.need_buy);
      return $(".mfnl2 input").val("");
    } else {
      if (data.e === 1) {
        A.notify($r, data.m);
      }
      if ((data != null ? data.link : void 0) != null) {
        $(".ava_back").css('background-image', 'url(' + data.link + ')');
        return $("#page").css('background-image', 'url(' + data.link + ')');
      }
    }
  },
  aUploadBg2: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.need_buy !== void 0) {
      A.W.openBuy(data.need_buy);
      return $(".mfnl2 input").val("");
    } else {
      if (data.e === 1) {
        A.notify($r, data.m);
      }
      if ((data != null ? data.link : void 0) != null) {
        $(".ava_back2").css('background-image', 'url(' + data.link + ')');
        $(A.P.getTemplBg2Block()).css('background-image', 'url(' + data.link + ')');
        $("#page").attr('data-class2', '').attr('data-bg2', data.link);
        return A.P.setTemplate(A.P.template);
      }
    }
  },
  aUploadIcon: function(data, cd) {
    var $r;
    console.log(data);
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.need_buy !== void 0) {
      A.W.openBuy(data.need_buy);
      return $(".mfnl4 input").val("");
    } else {
      if (data.e === 1) {
        A.notify($r, data.m);
      }
      if ((data != null ? data.link : void 0) != null) {
        return $(".widget_icon").css('background-image', 'url(' + data.link + ')');
      }
    }
  },
  setPageClass: function(id) {
    return API.GET.r(API.U.account.update_data, {
      col: 'class',
      val: id,
      tid: A.F.tid,
      dataType: "JSON"
    }, function(data) {
      if (!data.buyed) {
        return A.W.openBuy(data.buy_id);
      } else {
        return A.F.justSetPageClass(id);
      }
    });
  },
  justSetPageClass: function(id) {
    var c;
    c = A.F.classes[id];
    return $("#page").css('background-image', '').attr('class', '').addClass(c);
  },
  setPageClass2: function(id) {
    return API.GET.r(API.U.account.update_data, {
      col: 'class2',
      val: id,
      tid: A.F.tid,
      dataType: "JSON"
    }, function(data) {
      console.log(data);
      if (!data.buyed) {
        return A.W.openBuy(data.buy_id);
      } else {
        return A.F.justSetPageClass2(id);
      }
    });
  },
  justSetPageClass2: function(id) {
    var c;
    $("#page").attr('data-class2', id);
    A.P.clearTempl();
    $("#page").attr('data-bg2', '');
    c = A.F.classes[id];
    return $(A.P.getTemplBg2Block()).css('background-image', '').attr('class', '').addClass(c);
  },
  setPageSplash: function(id) {
    return API.GET.r(API.U.account.update_data, {
      col: 'class_splash',
      val: id,
      tid: A.F.tid,
      dataType: "JSON"
    }, function(data) {
      if (!data.buyed) {
        return A.W.openBuy(data.buy_id);
      } else {
        return A.F.justSetPageSplash(id);
      }
    });
  },
  justSetPageSplash: function(id) {
    return $("#page").removeAttr('class').css('background-image', 'url(/themes/sample/pics/splash/' + id + '.jpg)');
  },
  setPageBg2: function(bg2) {
    bg2 = $("#page").attr('data-bg2');
    A.P.clearTempl();
    return $(A.P.getTemplBg2Block()).removeAttr('class', '').css('background-image', 'url(' + bg2 + ')');
  },
  setPageSplash2: function(id, c) {
    return API.GET.r(API.U.account.update_data, {
      col: 'class_splash2',
      val: id,
      tid: A.F.tid,
      dataType: "JSON"
    }, function(data) {
      if (!data.buyed) {
        return A.W.openBuy(data.buy_id);
      } else {
        return A.F.justSetPageSplash2(id);
      }
    });
  },
  justSetPageSplash2: function(id) {
    $("#page").attr('data-class2', -id);
    A.P.clearTempl();
    $("#page").attr('data-bg2', '');
    return $(A.P.getTemplBg2Block()).removeAttr('class', '').css('background-image', 'url(/themes/sample/pics/splash/' + id + '.jpg)');
  },
  //API.GET.r API.U.account.update_data, {col:'class_splash2',val:id,tid:A.F.tid}
  addLink: function(type) {
    return API.GET.r(API.U.link.uadd, {
      type: type,
      tid: A.F.tid,
      dataType: "JSON"
    }, A.F.aAddLink);
  },
  aAddLink: function(data) {
    if (!data.buyed) {
      return A.W.openBuy(data.buy_id);
    } else {
      A.F.updateEditLink();
      A.F.getEditList();
      A.F.updateMyLinks();
      return A.F.openEditLink(data.id);
    }
  },
  deleteLink: function(id) {
    if (confirm("Вы действительно хотите удалить ссылку?")) {
      API.GET.r(API.U.link.udelete, {
        id: id
      }, A.F.updateMyLinks);
      return $(`tr[data-id=${id}]`).remove();
    }
  },
  updateEditLink: function() {
    return API.GET.r(API.U.link.mylist, {
      tid: A.F.tid
    }, function(data) {
      $("#mylinks").html(data);
      return A.F.initEditLinks();
    });
  },
  updateLink: function(id, i) {
    var $p, $t, $type, s, val;
    $t = $(i);
    val = $t.val();
    if (($type = $t.attr('data-type')) === 'json_data') {
      val = {};
      $p = $t.parent().parent();
      $("input", $p).each(function() {
        var $tt;
        $tt = $(this);
        return val[$tt.attr('data-field')] = $tt.val();
      });
    }
    console.log('asdasda');
    if (($type = $t.attr('data-type')) === 'form_data') {
      val = {};
      //console.log $("input[type=checkbox]:checked",$p)
      //$p = $t.parent().parent()
      //$("input[type=checkbox]:checked",$p).each ->
      $p = $t.parent().parent();
      $(".switch.selected", $p).each(function() {
        var $tt;
        $tt = $(this);
        return val[$tt.attr('data-input')] = 1;
      });
    }
    s = {
      id: id,
      type: $type,
      val: val
    };
    console.log(s);
    return API.GET.r(API.U.link.uupdate, s, A.F.updateMyLinks);
  },
  updateMyLinks: function(data) {
    //console.log data
    return API.GET.r(API.U.link.mypubliclist, {
      tid: A.F.tid
    }, function(data) {
      //$("#fake_apps").html(data)
      $("#apps").html(data);
      //$("#apps").html("")
      return A.P.setSlides();
    });
  },
  initEditLinks: function() {
    var base;
    if (typeof (base = $('#mylinks .sortable')).sortable === "function") {
      base.sortable({
        axis: 'y',
        opacity: 0.5,
        distance: 5,
        scroll: false,
        cursor: "move",
        tolerance: "pointer",
        cancel: ".deleter, input, textarea",
        start: function(event, ui) {},
        sort: function(event, ui) {
          var $p;
          return ($p = $(ui.placeholder[0])).html(ui.helper.context.innerHTML);
        },
        stop: function() {
          var arr;
          arr = [];
          $('#mylinks tr').each(function() {
            return arr.push($(this).attr('data-id'));
          });
          return API.GET.r(API.U.link.update.pos, {
            pos: arr
          }, A.F.updateMyLinks);
        }
      });
    }
    return A.P.initMini();
  },
  deleteItem: function(id) {
    if (confirm("Действительно удалить товар?")) {
      $(`.item_edit[data-id=${id}]`).remove();
      return API.GET.r(API.U.item.udelete, {
        id: id
      });
    }
  },
  statLink: function(id) {
    return API.GET.r(API.U.link.stat, {
      id: id
    });
  },
  makeCheck: function(id) {
    return API.GET.r(API.U.check.makeCheck, {
      id: id
    }, function(data) {
      //console.log data
      if (data !== "") {
        return window.location.href = data;
      }
    });
  },
  makeCheckBySum: function(form) {
    var $f;
    $f = $(form);
    API.GET.r(API.U.check.makeCheckBySum, {
      sum: $("[name=sum]", $f).val(),
      product: $("[name=product]", $f).val(),
      dataType: "JSON"
    }, function(data) {
      if (data.e === 1) {
        return alert(data.m);
      } else if (data.link !== "") {
        return window.location.href = data.link;
      }
    });
    return false;
  },
  linkForm: function(f) {
    var $f, s;
    $f = $(f);
    s = A.serialize($f);
    if (s.name.trim() === "" && s.phone.trim() === "" && s.email.trim() === "") {
      alert("Введите контактные данные");
    } else {
      $f.parent().replaceWith('<div class="app form_res">Данные успешно отправлены!</div>');
      API.GET.r(API.U.fdata.uadd, s, function(data) {});
    }
    //console.log data
    return false;
  },
  addTid: function(f) {
    var $f, $res, s;
    $f = $(f);
    $res = $(".res", $f).hide(300);
    API.GET.r(API.U.tid.uadd, s = {
      dataType: "JSON",
      val: $("input[name=val]", $f).val()
    }, function(data) {
      if (data.e === 1) {
        return $res.html(data.m).show(300);
      } else if (data.link !== '' && data.link !== void 0) {
        return window.location.href = data.link;
      }
    });
    return false;
  },
  saveItem: function(f, id) {
    var $b, $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      id: id,
      name: $.trim($("[name=name]", $f).val()),
      descr: $.trim($("[name=descr]", $f).val()),
      price: $.trim($("[name=price]", $f).val()),
      nocache: (new Date()).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.name === "") {
      A.notify($res, 'Введите, пожалуйста, название');
    } else {
      A.I.waitButton($b = $("button", $f));
      API.GET.r(API.U.item.uupdate, s, A.F.aSaveItem, {
        f: $f,
        r: $res,
        b: $b
      });
    }
    return false;
  },
  aSaveItem: function(data, cd) {
    A.I.unwaitButton(cd.b);
    return A.notify(cd.r, data.m);
  },
  //-- FDATA ----------
  getFdataStatus: function() {
    return A.F.fdataStatus;
  },
  fdataTable: function(page = A.F.fdataPage) {
    var s;
    A.F.fdataPage = page;
    return API.GET.r(API.U.fdata.utable, s = {
      status: A.F.getFdataStatus(),
      page: page,
      tid: A.F.tid
    }, function(data) {
      return $("#fdata_table").html(data);
    });
  },
  udpateFdataStatus: function(id, t) {
    var $t, val;
    $t = $(t);
    val = $t.val();
    return API.GET.r(API.U.fdata.status, {
      id: id,
      status: val
    }, function(data) {
      return A.F.fdataTable();
    });
  },
  deleteFdata: function(id) {
    if (confirm("Действительно хотите удалить данные? Это нельзя будет отменить")) {
      return API.GET.r(API.U.fdata.remove, {
        id: id
      }, function(data) {
        return A.F.fdataTable();
      });
    }
  },
  setFdataStatus: function(x) {
    A.F.fdataStatus = parseInt(x);
    return A.F.fdataTable();
  },
  //-- END FDATA ----------

  //-- ORDER ----------
  addOrder: function(f) {
    var $b, $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      id: $.trim($("[name=id]", $f).val()),
      name: $.trim($("[name=name]", $f).val()),
      phone: $.trim($("[name=phone]", $f).val()),
      email: $.trim($("[name=email]", $f).val()),
      nocache: (new Date()).getTime()
    };
    $res = $(".res", $f).hide(300);
    console.log(s);
    if (s.phone === "" && s.email === "") {
      A.notify($res, 'Введите, пожалуйста, телефон или email');
    } else {
      A.I.waitButton($b = $("button", $f));
      API.GET.r(API.U.order.uadd, s, A.F.aAddOrder, {
        f: $f,
        r: $res,
        b: $b
      });
    }
    return false;
  },
  aAddOrder: function(data, cd) {
    A.I.unwaitButton(cd.b);
    if (data.e === 1) {
      return A.notify(cd.r, data.m);
    } else {
      return A.W.openThx();
    }
  },
  getOrderStatus: function() {
    return A.F.orderStatus;
  },
  orderTable: function(page = A.F.orderPage) {
    var s;
    A.F.orderPage = page;
    return API.GET.r(API.U.order.utable, s = {
      status: A.F.getOrderStatus(),
      page: page,
      tid: A.F.tid
    }, function(data) {
      return $("#order_table").html(data);
    });
  },
  udpateOrderStatus: function(id, t) {
    var $t, val;
    $t = $(t);
    val = $t.val();
    return API.GET.r(API.U.order.status, {
      id: id,
      status: val
    }, function(data) {
      console.log(data);
      return A.F.orderTable();
    });
  },
  deleteOrder: function(id) {
    if (confirm("Действительно хотите удалить данные? Это нельзя будет отменить")) {
      return API.GET.r(API.U.order.remove, {
        id: id
      }, function(data) {
        return A.F.orderTable();
      });
    }
  },
  setOrderStatus: function(x) {
    console.log('setOrderStatus', x);
    A.F.orderStatus = parseInt(x);
    return A.F.orderTable();
  },
  //-- END ORDER ----------
  togglePixel: function(x) {
    var $t, s;
    $t = $(event.target);
    s = {
      vis: $t.is(":checked") ? 1 : 0,
      type: x,
      tid: A.F.tid
    };
    console.log(s);
    if (s.vis === 1) {
      $(`.int-${x}`).addClass('selected');
    } else {
      $(`.int-${x}`).removeClass('selected');
    }
    return API.GET.r(API.U.tid.is_pixel, s, function(data) {
      return console.log(data);
    });
  },
  setPixelVal: function(form) {
    var $f, type, val;
    $f = $(form);
    val = $("[name=val]", $f).val();
    type = $("[name=col]", $f).val().substr(0, 2);
    $(`.inp_${type}`).val(val);
    return console.log('setpixel', val, type);
  },
  getEditList: function() {
    return API.GET.r(API.U.link.myeditlist, {
      tid: A.F.tid
    }, function(data) {
      $("#edit_list_table").html(data);
      return A.P.sortableEditList();
    });
  },
  openEditLink: function(id) {
    $("#w_link_edit_cont").html('<p>Загрузка...</p>');
    $("#w_link_edit,.hover").addClass('open');
    return API.GET.r(API.U.link.editform, {
      id: id
    }, function(data) {
      $("#w_link_edit_cont").html(data);
      A.P.initMini();
      return $("#link_vis").click(function() {
        var s, vis;
        id = $(this).attr('data-id');
        vis = $(this).hasClass('selected') ? 1 : 0;
        s = {
          id: id,
          vis: vis
        };
        console.log(s);
        return API.GET.r(API.U.link.togglevis, s, function(data) {
          return console.log(data);
        });
      });
    });
  },
  closeEditLink: function() {
    $("#w_link_edit,.hover").removeClass('open');
    return A.F.reloadLinks();
  },
  deleteLinkFromForm: function(id) {
    A.F.deleteLink(id);
    return A.F.closeEditLink();
  },
  reloadLinks: function() {
    A.F.updateEditLink();
    A.F.getEditList();
    return A.F.updateMyLinks();
  },
  buyProduct: function(id) {
    var $res, $t;
    $t = $(event.target);
    $res = $t.next().hide(300);
    A.I.waitButton($t);
    return API.GET.r(API.U.buy.product, {
      id: id,
      dataType: "JSON"
    }, function(data) {
      if (data.e === 1) {
        A.notify($res, data.m);
      } else {
        A.W.openBuySuccess(id);
      }
      return A.I.unwaitButton($t);
    });
  }
};

//-------------------------------------------------
// A.I = РАБОТА С ПОЛЯМИ ВВОДА
//-------------------------------------------------
A.I = {
  waitInput: function(x) {
    return $(x).each(function() {
      var button, click, val;
      button = $(this);
      click = button.attr('onclick');
      val = $.trim(button.val());
      return button.attr('onclick', '').attr('data-val', val).val(val === "" ? '' : 'Отправляется...').addClass("wait").attr('data-onclick', click).attr('disabled', 'disabled');
    });
  },
  unwaitInput: function(x) {
    return $(x).each(function() {
      var b;
      b = $(this);
      return b.val(b.attr('data-val')).removeClass("wait").attr('onclick', b.attr('data-onclick')).removeAttr('disabled');
    });
  },
  waitButton: function(x) {
    return $(x).each(function() {
      var button, click, val;
      button = $(this);
      click = button.attr('onclick');
      val = $.trim(button.html());
      if (val !== "?") {
        return button.attr('onclick', '').attr('data-val', val).html(val === "" || val === "&nbsp;" ? '' : 'Отправляется...').addClass("wait").attr('data-onclick', click).attr('disabled', 'disabled');
      }
    });
  },
  unwaitButton: function(x) {
    return $(x).each(function() {
      var b;
      b = $(this);
      return b.html(b.attr('data-val')).removeClass("wait").attr('onclick', b.attr('data-onclick')).removeAttr('disabled');
    });
  }
};

A.ME = {
  copyTM: null,
  init: function() {
    var clipboard, id;
    id = ".copy1";
    clipboard = new Clipboard(id);
    return clipboard.on('success', function(e) {
      var $t;
      $t = $(e.trigger);
      $t.addClass('success').text('Скопировано');
      e.clearSelection();
      if (A.ME.copyTM !== null) {
        clearTimeout(A.ME.copyTM);
      }
      return A.ME.copyTM = setTimeout(function() {
        return $t.removeClass('success').text('Скопировать');
      }, 5000);
    });
  }
};

A.P = {
  init: function() {},
  // A.P.body = $("html,body")
  templ: {
    1: {
      bg2: '#cont_back',
      class: ''
    },
    2: {
      bg2: '#ava',
      class: 'ver2'
    },
    3: {
      bg2: '',
      class: 'ver3'
    }
  },
  template: 1,
  getTemplBg2Block: function() {
    return A.P.templ[A.P.template].bg2;
  },
  clearTempl: function() {
    var classes, i, t, v;
    t = A.P.templ[A.P.template];
    classes = [];
    for (i in A.P.templ) {
      v = A.P.templ[i];
      classes.push(v.class);
    }
    $('#page_content').removeClass(classes.join(" ")).addClass(t.class);
    $('#cont_back').removeClass(A.F.classesArray).css('background-image', 'none');
    return $('#ava').removeClass(A.F.classesArray).css('background-image', 'none');
  },
  setTemplate: function(x = 1) {
    var bg2, c, t;
    API.GET.r(API.U.account.update_data, {
      col: 'template',
      val: x,
      tid: A.F.tid,
      dataType: "JSON"
    }, function(data) {});
    //console.log data
    A.P.template = x;
    t = A.P.templ[x];
    A.P.clearTempl();
    c = parseInt(A.P.page.attr('data-class2'));
    A.P.page.attr('data-template', x);
    bg2 = A.P.page.attr('data-bg2');
    if (bg2 !== '') {
      A.F.setPageBg2(bg2);
    } else {
      if (c < 0) {
        A.F.justSetPageSplash2(-c);
      } else {
        A.F.justSetPageClass2(c);
      }
    }
    A.P.$templ.removeClass('selected');
    $(A.P.$templ[x - 1]).addClass('selected');
    A.display($("#text2_input"), x === 2);
    return A.display($("#back_cont"), x !== 3);
  },
  ready: function() {
    var $f, $h;
    A.P.body = $("body");
    $("#content").css({
      paddingBottom: $h = ($f = $("#b_footer")).outerHeight()
    });
    $f.css({
      marginTop: -$h
    });
    A.P.animate = $(".ani");
    A.P.pages = $(".pages .page");
    A.P.bpages = $("#pages button");
    A.P.page = $("#page");
    A.P.cont = $(".cont");
    A.P.apps = $(".cont .apps");
    A.P.setSlides();
    A.P.resize();
    A.P.cont.addClass('show');
    A.P.semen();
    A.P.initTimer();
    A.P.sortableEditList();
    A.P.initMini();
    A.P.initWidget();
    if (A.P.page.length > 0) {
      A.P.$templ = $(".choose_template .templ");
      A.P.template = parseInt(A.P.page.attr('data-template'));
      return A.P.setTemplate(A.P.template);
    }
  },
  initWidget: function() {
    A.P.isWidget = $("#page").hasClass('widget');
    if (A.P.isWidget) {
      $("body").css('overflow', 'hidden');
      return $("#page").css({
        height: '100%',
        'position': 'relative'
      }).perfectScrollbar();
    }
  },
  timers: null,
  timer: function() {
    return A.P.timers.each(function() {
      var $t, d, days, end, h, m, res, s, time;
      $t = $(this);
      d = Math.floor((new Date()).getTime() / 1000);
      end = parseInt($t.attr('data-end'));
      time = end - d;
      if (time > 0) {
        days = Math.floor(time / (60 * 60 * 24));
        h = Math.floor(time / (60 * 60)) % 24;
        m = Math.floor(time / 60) % 60;
        s = time % 60;
        res = (days > 0 ? days + 'д ' : '') + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        return $t.text(res);
      }
    });
  },
  sortableEditList: function() {
    var base, o;
    o = {
      axis: 'y',
      opacity: 0.5,
      distance: 5,
      scroll: true,
      cursor: "move",
      tolerance: "pointer",
      //cancel:".tbclear",
      start: function(event, ui) {},
      sort: function(event, ui) {
        var $p;
        return ($p = $(ui.placeholder[0])).html(ui.helper.context.innerHTML);
      },
      stop: function() {
        var arr;
        arr = [];
        $('#edit_list_table .link').each(function() {
          return arr.push($(this).attr('data-id'));
        });
        return API.GET.r(API.U.link.update.pos, {
          pos: arr
        }, A.F.updateMyLinks);
      }
    };
    if (A.isMobile()) {
      o.handle = ".move";
    }
    if (typeof (base = $('#edit_list_table')).sortable === "function") {
      base.sortable(o);
    }
    return $("#edit_list_table .link").on('touchend', function(e) {
      if (!$(e.target).hasClass('move')) {
        return $(this).click();
      }
    });
  },
  initTimer: function() {
    A.P.timers = $(".timer");
    if (A.P.timers.length > 0) {
      return setInterval(A.P.timer, 999);
    }
  },
  setSlides: function() {
    /*
    if type!=undefined
      if type=='site'
        row = 0
        rows+=0.5
        if rows>=maxr
          now++
          rows = 0
      else
        row++
        if row==1
          rows++
        if row==maxc
          row=0
          if rows>=maxr
            now++
            rows = 0
    */
    var $s, c, i, isWidget, j, k, l, len, len1, maxc, maxr, now, row, rows, s, slides;
    if (A.P.page !== void 0) {
      slides = [];
      now = 0;
      rows = 0;
      row = 0;
      maxc = (A.w.width() <= 413 ? 3 : 4);
      maxr = (A.w.height() <= 686 ? 2 : 3);
      isWidget = $("#page").hasClass('widget');
      if (isWidget) {
        maxr = 1.5;
      }
      $("#fake_apps .app").each(function() {
        var $t, type;
        if (slides[now] === void 0) {
          slides[now] = [];
        }
        $t = $(this);
        slides[now].push($t);
        return type = $t.attr('data-type');
      });
      s = [];
      c = 0;
      $("#apps .slide").each(function() {
        return A.P.apps.trigger('remove.owl.carousel', 0);
      });
      for (k = 0, len = slides.length; k < len; k++) {
        i = slides[k];
        $s = $('<div class="slide"></div>');
        for (l = 0, len1 = i.length; l < len1; l++) {
          j = i[l];
          $s.append(j);
        }
        if (!A.P.apps.hasClass('owl-loaded')) {
          A.P.apps.append($s);
        } else {
          A.P.apps.trigger('add.owl.carousel', [$s]);
        }
      }
      A.P.apps.trigger('refresh.owl.carousel');
      $(".item_list").owlCarousel({
        items: 2,
        dots: false,
        nav: false,
        smartSpeed: 500
      });
    }
    return A.P.resize();
  },
  scroll: function() {
    var ref;
    return (ref = A.P.animate) != null ? ref.each(function() {
      var $t;
      if (!($t = $(this)).hasClass('animated')) {
        if (($t.offset().top - (A.w.scrollTop() + A.w.height()) < 0) && ($t.offset().top + $t.height()) > (A.w.scrollTop() + 5)) {
          return $t.addClass('animated').addClass($t.attr('data-ani'));
        }
      }
    }) : void 0;
  },
  resize: function() {
    var h;
    if (A.P.cont !== void 0 && A.P.page !== void 0) {
      h = Math.max(70, (A.w.height() - A.P.cont.height()) / 2);
      return A.P.page.css({
        paddingTop: h
      });
    }
  },
  setPage: function(x) {
    A.P.pages.removeClass('selected');
    $(A.P.pages[x]).addClass('selected');
    A.P.bpages.removeClass('selected');
    return $(A.P.bpages[x]).addClass('selected');
  },
  openBar: function() {
    return A.P.body.css('overflow', 'hidden');
  },
  closeBar: function() {
    return A.P.body.css('overflow', 'auto');
  },
  showLeftbar: function() {
    A.P.openBar();
    return $("#leftbar").addClass('show');
  },
  showRightbar: function() {
    A.P.openBar();
    $("#rightbar").addClass('show');
    return $("#customizer").addClass('show');
  },
  hideLeftbar: function() {
    A.P.closeBar();
    return $("#leftbar").removeClass('show');
  },
  hideRightbar: function() {
    A.P.closeBar();
    $("#rightbar").removeClass('show');
    return $("#customizer").removeClass('show');
  },
  initMini: function() {
    $('.switch:not(.inited)').addClass('inited').click(function() {
      return $(this).toggleClass('selected');
    });
    $("[data-type=form_data]:not(.form_data_inited)").addClass('form_data_inited').click(function() {
      return A.F.updateLink($(this).attr('data-id'), this);
    });
    $("._colorpicker:not(.inited)").addClass('inited').colorpicker();
    $("._notouch:not(.inited)").addClass('inited').on('touchstart', function(e) {
      e.preventDefault();
      //e.stopPropagation()
      return $(this).click();
    }).on('touchend ', function(e) {
      if (A.isMobile()) {
        //$(@).click()
        return e.preventDefault();
      }
    });
    //e.stopPropagation()
    //alert('sss')
    return EFFECTS.PT.initparticles();
  },
  semen: function() {
    /*
    $('#w_tid_name .text, #w_tid_hello .text').emojiPicker
      height: '300px'
      width: '450px'
    */
    $('._btn-cat').click(function() {
      return $('#hide-cat').slideToggle(300);
    });
    //$('._btn-cat').on 'touchend',->
    //  $('#hide-cat').slideToggle(300)
    $('._mc').click(function() {
      $(this).toggleClass('selected');
      return $(this).parent().find('._mc').not(this).removeClass('selected');
    });
    if (!A.isMobile()) {
      $('._roller').perfectScrollbar();
    }
    $('._remove').click(function() {
      return $(this).parent().remove();
    });
    $('#file').change(function(e) {
      var img;
      img = e.target.files[0];
      if (!img.type.match('image.*')) {
        alert('Whoops! That is not an image.');
        return;
      }
      iEdit.open(img, true, function(res) {
        console.log(res);
        $('#result').css('background-image', 'url(' + res + ')');
      });
    });
    $('._cancel_int_edit').click(function() {
      return $('.widget.int.edit').removeClass('open');
    });
    //$('input.clear-input').val('')
    //s = $('.widget.int.edit').find('.switch')
    //s.removeClass('selected')
    //s.find('input[type=checkbox]').attr('checked', false)
    $('._btn-nav').click(function() {
      var cp, rp, t, с;
      t = $(this);
      t.addClass('selected');
      t.parents('.btn-nav').find('._btn-nav').not(t).removeClass('selected');
      с = t.attr('data-send-class');
      cp = t.parents('.btn-nav').attr('data-controls');
      rp = $('#customizer').find('.slider[data-roller=' + cp + ']');
      rp.attr('class', 'slider');
      return rp.addClass(с);
    });
    $('._m-item').click(function() {
      var f, ii, t;
      t = $(this);
      t.parents('.messengers').find('._m-item').not(t).hide();
      t.parents('.messengers').find('.btn').show();
      t.find('p').hide();
      t.find('.sign, input[type="text"]').show();
      t.addClass('no_margin_top');
      ii = t.find('input[type="text"]').val();
      f = t.parents('.messengers').find('.filled');
      if (ii !== '') {
        t.find('.switch').show();
      }
      $('._cancel').click(function() {
        t.parents('.messengers').find('._m-item').not(t).show();
        t.parents('.messengers').find('.btn').hide();
        t.find('p').show();
        t.find('.sign, input[type="text"], .switch').hide();
        t.removeClass('no_margin_top');
        if (f.is(':visible')) {
          t.find('p').hide();
          return t.find('.sign, input[type="text"]').show();
        } else {
          return t.find('input[type="text"]').val('');
        }
      });
      return $('._save').click(function() {
        var i;
        i = t.find('input[type="text"]').val();
        if (i !== '') {
          t.parents('.messengers').find('._m-item').not(t).show();
          t.parents('.messengers').find('.btn').hide();
          t.find('.filled').show();
          t.find('.switch').hide();
          return t.removeClass('no_margin_top');
        }
      });
    });
    $(".accordion-box:not(.inited)").each(function() {
      var $a;
      ($a = $(this)).addClass('inited');
      return $('.ac-title', $a).click(function() {
        var $b, $p, $t;
        $t = $(this);
        $b = $t.next();
        $b.toggle(300);
        $p = $t.parents('.ac-item');
        $p.toggleClass('open');
        $t.parents('.accordion-box').find('.ac-item .ac-body').not($b).slideUp(300);
        return $t.parents('.accordion-box').find('.ac-item').not($p).removeClass('open');
      });
    });
    //табы
    $('.tabs ul.tabs-btn li').click(function() {
      var $ap, $i, $tp;
      $tp = $(this).attr('data-page');
      $i = $(this).parent().parent().find('.tabs-container .t-item[data-item=' + $tp + ']');
      $ap = $i.attr('data-item');
      if ($tp === $ap) {
        $i.addClass('open');
        $(this).parent().parent().find('.tabs-container .t-item').not($i).removeClass('open');
        $(this).addClass('open');
        return $(this).parent().find('li').not($(this)).removeClass('open');
      } else {
        return false;
      }
    });
    return $("#w_edit_link_close,.hover").click(function() {
      return A.F.reloadLinks();
    });
  }
};

A.R = {
  ready: function() {
    var $x;
    A.R.rounds = $(".rounds .round");
    $x = $('.mfnl_round');
    if (A.R.rounds.length < 1 && $x.length < 1) {
      return delete A.R;
    } else {
      A.R.rounds.click(function() {
        A.R.rounds.removeClass('selected');
        $(this).addClass('selected');
        if ($("#file_image").val() !== "") {
          return $("#round_form").submit();
        }
      });
      A.MFNL('.mfnl_round', API.U.round.img, function(data, cd) {
        data = JSON.parse(data);
        $("#round_result").attr('href', data.link).show();
        return $("#round_result img").attr("src", data.link);
      }, A.R.data, {
        c: ".mfnl"
      });
      return $("#file_image").on('change', function() {
        return $("#round_form").submit();
      });
    }
  },
  data: function() {
    var o;
    return o = {
      type: $(".rounds .round.selected").index() + 1,
      folder: 'round'
    };
  }
};

A.TOGGLE = {
  init: function() {}
};

A.UI = {
  ready: function() {
    return A.UI.accardeon();
  },
  accardeon: function(x = '.accardeon') {
    var $cont, $pages, $t, $titles;
    $t = $(x);
    $pages = $(".adeon_tab", $t);
    $titles = $(".adeon_title", $t);
    $cont = $(".adeon_cont", $t);
    $titles.append($("<span></span>"));
    $titles.click(function() {
      var $ti, p;
      $ti = $(this);
      p = $ti.parent();
      if (!p.hasClass('open')) {
        $(".adeon_cont", p.parent()).hide(500);
        $pages.removeClass('open');
        p.addClass('open');
        return $(".adeon_cont", p).show(500);
      }
    });
    //$($titles[0]).click()
    return $(".adeon_tab.open .adeon_cont").show();
  }
};

A.UPDATE = {
  init: function() {}
};

//-----------------------------------------------
// A.W - Работа со всплывающими окнами
//-----------------------------------------------
A.W = {
  back: null,
  w: null,
  i: null,
  init: function() {
    console.log($("#wback"));
    A.W.back = $("#wback").css({
      display: 'none',
      height: '100%',
      opacity: 1
    });
    if (A.W.back.length > 0) {
      A.W.w = $("#window");
      return A.W.i = $("#w_inner");
    } else {
      return delete A.W;
    }
  },
  startLoad: function() {
    return A.W.i.addClass("load").html("Загрузка данных");
  },
  finishLoad: function(data) {
    return A.W.i.removeClass("load").html(data);
  },
  setHtml: function(data) {
    return A.W.finishLoad(data);
  },
  open: function(w) {
    A.P.body.css('overflow', 'hidden');
    A.W.back.css({
      display: 'block',
      opacity: 1
    });
    return A.W.w.css({
      maxWidth: (w !== void 0 ? w : 800) + "px"
    });
  },
  close: function() {
    var base;
    A.W.back.css({
      display: 'none',
      opacity: 0
    });
    A.P.body.css('overflow', 'auto');
    A.W.i.html("");
    if (typeof (base = A.W).onClose === "function") {
      base.onClose();
    }
    return A.F.updateMyLinks();
  },
  openRecall: function() {
    A.W.open(1000);
    A.W.startLoad();
    return API.GET.r(API.U.get.form.recall, {}, A.W.aOpenRecall);
  },
  aOpenRecall: function(data) {
    A.W.setHtml(data);
    return $(".window_inner input[name=phone]").mask("+7 (999) 999-99-99");
  },
  openAuth: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.account.form.auth, {}, A.W.aOpenRecall);
  },
  openReg: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.account.form.reg, {}, A.W.aOpenRecall);
  },
  openMakeCheck: function(id) {
    A.W.open(400);
    A.W.startLoad();
    return API.GET.r(API.U.check.choose_price, {
      id: id
    }, A.W.aOpenMakeCheck);
  },
  aOpenMakeCheck: function(data, cd) {
    return A.W.setHtml(data);
  },
  openAddLink: function() {
    if (A.isMobile()) {
      A.P.showRightbar();
    }
    $("#show_edit_link_tab_1").click();
    return $("#show_edit_link_tab_2").click();
  },
  /*
  A.W.open(1200);
  A.W.startLoad()
  API.GET.r API.U.link.get.edit,{tid:A.F.tid},A.W.aOpenAddLink
  */
  aOpenAddLink: function(data) {
    A.W.setHtml(data);
    return A.F.initEditLinks();
  },
  openShopEdit: function(id) {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.link.get.shop, {
      id: id
    }, A.W.aOpenShop);
  },
  aOpenShop: function(data) {
    var base;
    A.W.setHtml(data);
    return typeof (base = $('.item_edit_list')).sortable === "function" ? base.sortable({
      //axis: 'y',
      opacity: 0.5,
      distance: 5,
      scroll: false,
      cursor: "move",
      tolerance: "pointer",
      cancel: ".delete, .edit",
      start: function(event, ui) {},
      sort: function(event, ui) {
        var $p;
        return ($p = $(ui.placeholder[0])).html(ui.helper.context.innerHTML);
      },
      stop: function() {
        var arr;
        arr = [];
        $('.item_edit_list .item_edit').each(function() {
          return arr.push($(this).attr('data-id'));
        });
        return API.GET.r(API.U.item.update.pos, {
          pos: arr
        }, function(data) {
          return console.log(data);
        });
      }
    }) : void 0;
  },
  openItem: function(id) {
    A.W.open(1000);
    A.W.startLoad();
    return API.GET.r(API.U.item.get.order, {
      id: id
    }, A.W.aOpenItem);
  },
  openBuy: function(id) {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.buy.get.buy, {
      id: id
    }, A.W.setHtml);
  },
  openAddBalance: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.buy.get.add_balance, {}, A.W.setHtml);
  },
  openBuySuccess: function(id) {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.buy.get.buy_success, {
      id: id
    }, function(data) {
      A.W.setHtml(data);
      return $(`._product_${id}`).removeClass('need_buy');
    });
  },
  aOpenItem: function(data) {
    return A.W.setHtml(data);
  },
  openAddItem: function(id) {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.item.get.edit, {
      block_id: id
    }, A.W.aOpenItemEdit);
  },
  openThx: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.item.get.thx, {}, A.W.setHtml);
  },
  openEditItem: function(id) {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.item.get.edit, {
      id: id
    }, A.W.aOpenItemEdit);
  },
  aOpenItemEdit: function(data) {
    A.W.setHtml(data);
    A.MFNL('.mfnl_item', API.U.item.image, A.F.aUploadItemImage, {
      folder: 'item',
      id: $("[name=id]", A.W.i).val()
    }, {
      r: $("#img_res", A.W.i)
    });
    return $(".mfnl_item input[type=file]").change(function() {
      return $(this).parent().submit();
    });
  }
};

var EFFECTS;

EFFECTS = {};

EFFECTS.PT = {
  initparticles: function() {
    EFFECTS.PT.bubbles();
    EFFECTS.PT.hearts();
    EFFECTS.PT.lines();
    EFFECTS.PT.confetti();
    EFFECTS.PT.fire();
    EFFECTS.PT.sunbeams();
  },
  /*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/
  bubbles: function() {
    $.each($('.particletext.bubbles:not(.inited)').addClass('inited'), function() {
      var bubblecount, i, size;
      bubblecount = $(this).width() / 50 * 10;
      i = 0;
      while (i <= bubblecount) {
        size = $.rnd(40, 80) / 10;
        $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + $.rnd(0, 30) / 10 + 's;"></span>');
        i++;
      }
    });
  },
  hearts: function() {
    $.each($('.particletext.hearts:not(.inited)').addClass('inited'), function() {
      var heartcount, i, size;
      heartcount = $(this).width() / 50 * 5;
      i = 0;
      while (i <= heartcount) {
        size = $.rnd(60, 120) / 10;
        $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + $.rnd(0, 30) / 10 + 's;"></span>');
        i++;
      }
    });
  },
  lines: function() {
    $.each($('.particletext.lines:not(.inited)').addClass('inited'), function() {
      var i, linecount;
      linecount = $(this).width() / 50 * 10;
      i = 0;
      while (i <= linecount) {
        $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + $.rnd(0, 30) / 10 + 's;"></span>');
        i++;
      }
    });
  },
  confetti: function() {
    $.each($('.particletext.confetti:not(.inited)').addClass('inited'), function() {
      var confetticount, i;
      confetticount = $(this).width() / 50 * 10;
      i = 0;
      while (i <= confetticount) {
        $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + $.rnd(0, 30) / 10 + 's;"></span>');
        i++;
      }
    });
  },
  fire: function() {
    $.each($('.particletext.fire:not(.inited)').addClass('inited'), function() {
      var firecount, i, size;
      firecount = $(this).width() / 50 * 20;
      i = 0;
      while (i <= firecount) {
        size = $.rnd(8, 12);
        $(this).append('<span class="particle" style="top:' + $.rnd(40, 70) + '%; left:' + $.rnd(-10, 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + $.rnd(0, 20) / 10 + 's;"></span>');
        i++;
      }
    });
  },
  sunbeams: function() {
    $.each($('.particletext.sunbeams:not(.inited)').addClass('inited'), function() {
      var i, linecount;
      linecount = $(this).width() / 50 * 10;
      i = 0;
      while (i <= linecount) {
        $(this).append('<span class="particle" style="top:' + $.rnd(-50, 0) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + $.rnd(0, 30) / 10 + 's;"></span>');
        i++;
      }
    });
  }
};

jQuery.rnd = function(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

(function($) {
  var F;
  $.fn.PROFILE = function(method) {
    if (F[method]) {
      return F[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return F.init.apply(this, arguments);
    } else {
      return $.error('Метод с именем ' + method + ' не существует для jQuery.PROFILE');
    }
  };
  return F = {
    init: function() {},
    openEdit: function(type) {}
  };
})(jQuery);
