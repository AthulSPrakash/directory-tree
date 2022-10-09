const data = {
    id: 0,
    name: 'home',
    children: [
        {
            id: 1,
            name: 'image.jpg',
            props: {
                fileType: 'image',
                size: 4000
            }
        },
        {
            id: 2,
            name: 'video.mp4',
            props: {
                fileType: 'video',
                size: 50000
            }
        },
        {
            id: 3,
            name: 'new folder',
            children: [
                {
                    id: 4,
                    name: 'script.js',
                    props: {
                        fileType: 'script',
                        size: 10
                    }
                },
                {
                    id: 5,
                    name: 'new folder',
                    children: [
                        {
                            id: 9,
                            name: 'music.mp3',
                            props: {
                                fileType: 'audio',
                                size: 100000
                            }
                        },
                        {
                            id: 8,
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
                    id: 6,
                    name: 'document.pdf',
                    props: {
                        fileType: 'pdf',
                        size: 1000
                    }
                },
                {
                    id: 7,
                    name: 'slide.ppt',
                    props: {
                        fileType: 'generic',
                        size: 1000
                    }
                },
                {
                    id: 8,
                    name: 'excel.xlxs',
                    props: {
                        fileType: 'excel',
                        size: 1000
                    }
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
