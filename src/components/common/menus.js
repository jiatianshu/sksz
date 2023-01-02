export default [
        {
            icon: require('./../../assets/img/icon/ic_perception2x.png'),
            index: 'dashboard',
            title: '全域感知',
            subs: [
                {
                    icon: 'ic_city2x.png',
                    index: '/dashboard',
                    title: '数字城市',
                    parent:'dashboard'
                },
            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_smart2x.png'),
            index: 'zhyq',
            title: '智慧中心',
            subs: [
                {
                    icon: 'ic_plaza2x.png',
                    index: '/zhyq',
                    title: '智慧园区',
                    parent:"zhyq",
                },

            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_video2x.png'),
            index: 'spgl',
            title: '视频中心',
            subs: [
                {
                    icon: 'ic_video_white2x.png',
                    index: '/spgl/view-setting',
                    title: '视频管理',
                    parent:"spgl"
                },

            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_data2x.png'),
            index: 'dataCenter',
            title: '数据中心',
            subs: [
                {
                    icon: 'ic_video_white2x.png',
                    index: '/dataCenter/personData',
                    title: '人员数据',
                    parent:"dataCenter"
                },
                {
                    icon: 'ic_carnumber2x.png',
                    index: '/dataCenter/carData',
                    title: '车辆数据',
                    parent:"dataCenter"
                },
                {
                    icon: 'ic_housenumber2x.png',
                    index: '/dataCenter/houseData',
                    title: '房屋数据',
                    parent:"dataCenter"
                },
                {
                    icon: 'ic_plaza2x.png',
                    index: '/dataCenter/parkData',
                    title: '园区数据',
                    parent:"dataCenter"
                },
                {
                    icon: 'Ic_worknumber2x.png',
                    index: '/dataCenter/workData',
                    title: '单位数据',
                    parent:"dataCenter"
                },
                {
                    icon: 'Ic_trail2x.png',
                    index: '/dataCenter/equipmentData',
                    title: '设备数据',
                    parent:"dataCenter"
                },

            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_bell2x.png'),
            index: 'warningCenter',
            title: '预警中心',
            subs: [
                {
                    icon: 'ic_bell_outline2x.png',
                    index: '/warning/warningCenter',
                    title: '预警中心',
                    parent:"warningCenter",
                },

            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_share2x.png'),
            index: 'sharing',
            title: '共享中心',
            subs: [
                {
                    icon: 'Ic_sharedata2x.png',
                    index: '/sharing/sharingData',
                    title: '数据共享',
                    parent:"sharing"
                },

            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_Bus2x.png'),
            index: 'policeServices',
            title: '业务中心',
            subs: [
                {
                    icon: 'Ic_police2x.png',
                    index: '/policeServices/policeServices',
                    title: '警务服务',
                    parent:"policeServices"
                },
            ]
        },
        {
            icon: require('./../../assets/img/icon/ic_Service2x.png'),
            index: 'centerServices',
            title: '服务中心',
            subs: [
                {
                    icon: 'Ic_police2x.png',
                    index: '/centerServices/centerServices',
                    title: '服务中心',
                    parent:"centerServices"
                },
            ]
        },
    ]
