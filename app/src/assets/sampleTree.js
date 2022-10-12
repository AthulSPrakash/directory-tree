const data = {
    _id: 0,
    name: 'home',
    children: [
        {
            _id: 1,
            name: 'image.jpg',
            props: {
                fileType: 'image',
                size: 4000
            }
        },
        {
            _id: 2,
            name: 'video.mp4',
            props: {
                fileType: 'video',
                size: 50000
            }
        },
        {
            _id: 3,
            name: 'new folder',
            children: [
                {
                    _id: 4,
                    name: 'script.js',
                    props: {
                        fileType: 'script',
                        size: 10
                    }
                },
                {
                    _id: 5,
                    name: 'new folder',
                    children: [
                        {
                            _id: 10,
                            name: 'music.mp3',
                            props: {
                                fileType: 'audio',
                                size: 100000
                            }
                        },
                        {
                            _id: 11,
                            name: 'word.docx',
                            props: {
                                fileType: 'word',
                                size: 1000
                            }
                        }
                    ],
                    props: {},
                    isOpen: false
                },
                {
                    _id: 6,
                    name: 'document.pdf',
                    props: {
                        fileType: 'pdf',
                        size: 1000
                    }
                },
                {
                    _id: 7,
                    name: 'slide.ppt',
                    props: {
                        fileType: 'generic',
                        size: 1000
                    }
                },
                {
                    _id: 8,
                    name: 'excel.xlxs',
                    props: {
                        fileType: 'excel',
                        size: 1000
                    }
                },
                {
                    _id: 9,
                    name: 'new folder(1)',
                    children: [],
                    props: {},
                    isOpen: false
                }
            ],
            props: {},
            isOpen: true
        }
    ],
    props: {},
    isOpen: true,
}
export default data
