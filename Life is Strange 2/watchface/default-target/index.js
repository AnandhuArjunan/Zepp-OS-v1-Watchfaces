try {
    (() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const {px} = __$$app$$__.__globals__;
        const logger = Logger.getLogger('watchface6');
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 336,
                    h: 384,
                    color: '0xFF000000',
                    radius: 80,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 227,
                    hour_startY: 235,
                    hour_array: [
                        '2.png',
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png'
                    ],
                    hour_space: 0,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 227,
                    minute_startY: 277,
                    minute_array: [
                        '2.png',
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png'
                    ],
                    minute_space: 0,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    second_zero: 1,
                    second_startX: 37,
                    second_startY: 51,
                    second_array: [
                        '12.png',
                        '13.png',
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png'
                    ],
                    second_space: 10,
                    second_align: hmUI.align.RIGHT,
                    second_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 49,
                    y: 270,
                    week_en: [
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 50,
                    y: 205,
                    src: '29.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    year_startX: 130,
                    year_startY: 253,
                    year_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_align: hmUI.align.LEFT,
                    year_zero: 1,
                    year_space: 0,
                    year_is_character: false,
                    month_startX: 103,
                    month_startY: 253,
                    month_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: false,
                    day_startX: 72,
                    day_startY: 253,
                    day_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 127,
                    y: 267,
                    src: '40.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 100,
                    y: 267,
                    src: '41.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 227,
                    hour_startY: 235,
                    hour_array: [
                        '2.png',
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png'
                    ],
                    hour_space: 0,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 227,
                    minute_startY: 277,
                    minute_array: [
                        '2.png',
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png'
                    ],
                    minute_space: 0,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 49,
                    y: 270,
                    week_en: [
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png'
                    ],
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    year_startX: 130,
                    year_startY: 253,
                    year_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    year_align: hmUI.align.LEFT,
                    year_zero: 1,
                    year_space: 0,
                    year_is_character: false,
                    month_startX: 101,
                    month_startY: 253,
                    month_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: false,
                    day_startX: 72,
                    day_startY: 253,
                    day_sc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_tc_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_en_array: [
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
        ;
    })();
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}