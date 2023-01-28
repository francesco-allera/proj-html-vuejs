new Vue({
    el: '#app',
    data: {
        header: {
            logo: {
                src: './img/logo.png',
                link: 'https://maxcoach.thememove.com/main/'
            },
            menu: [
                {
                    title: 'home',
                    link: 'https://maxcoach.thememove.com/',
                    dropdown: true
                },
                {
                    title: 'pages',
                    link: '#',
                    dropdown: true
                },
                {
                    title: 'courses',
                    link: 'https://maxcoach.thememove.com/main/courses/',
                    dropdown: true
                },
                {
                    title: 'features',
                    link: '#',
                    dropdown: true
                },
                {
                    title: 'blog',
                    link: 'https://maxcoach.thememove.com/main/blog/',
                    dropdown: true
                },
                {
                    title: 'shop',
                    link: 'https://maxcoach.thememove.com/main/shop/',
                    dropdown: true
                }
            ],
            socials: [
                {
                    name: 'twitter',
                    link: '#',
                    classes: 'fa-brands fa-twitter'
                },
                {
                    name: 'facebook',
                    link: '#',
                    classes: 'fa-brands fa-facebook-f'
                },
                {
                    name: 'instagram',
                    link: '#',
                    classes: 'fa-brands fa-instagram'
                },
                {
                    name: 'linkedin',
                    link: '#',
                    classes: 'fa-brands fa-linkedin'
                }
            ]
        },
        main: {
            section1: {
                bg: [
                    {
                        src: './img/section-01-01.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-02.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-03.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-04.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-05.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-06.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-07.png',
                        shadow: false
                    },
                    {
                        src: './img/section-01-08.jpg',
                        shadow: true
                    },
                    {
                        src: './img/section-01-09.jpg',
                        shadow: true
                    },
                    {
                        src: './img/section-01-10.jpg',
                        shadow: true
                    }
                ]
            },
            section2: {
                bg: [
                    {
                        src: './img/section-02-01.png',
                        shadow: false
                    },
                    {
                        src: './img/section-02-02.png',
                        shadow: false
                    },
                    {
                        src: './img/section-02-03.png',
                        shadow: false
                    }
                ],
                elements: [
                    {
                        src: './img/section-02-element-01.png',
                        title: 'Online Courses',
                        text: 'Online art coaching now offers you a very powerful way to redesign your artist mind.'
                    },
                    {
                        src: './img/section-02-element-02.png',
                        title: 'One to One',
                        text: 'Getting the necessary clarity about the current state to help you improve your ability.'
                    },
                    {
                        src: './img/section-02-element-03.png',
                        title: 'Anywhere',
                        text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
                    },
                    {
                        src: './img/section-02-element-04.png',
                        title: 'On Time',
                        text: 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.'
                    }
                ]
            },
            section5: {
                cards: [
                    {
                        name: 'Mina Hoolace',
                        job: '/ Freelancer',
                        title: 'High level of efficiency and scientific teaching methods',
                        text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                        src: './img/section-05-slider-01.jpg'
                    },
                    {
                        name: 'Madley Pondor',
                        job: '/ IT Specialist',
                        title: 'Professional team of specialists and passionate mentors at reach',
                        text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                        src: './img/section-05-slider-02.jpg'
                    },
                    {
                        name: 'Luvic Dubble',
                        job: '/ Private Tutor',
                        title: 'The MaxCoach team works really hard to ensure high quality',
                        text: 'I am happy with thier arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.',
                        src: './img/section-05-slider-03.jpg'
                    },
                    {
                        name: 'Florence Themes',
                        job: '/ Multimedia Admin',
                        title: 'It\'s a choice of quality for people with special needs',
                        text: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                        src: './img/section-05-slider-04.jpg'
                    }
                ]
            },
            section6: {
                bg: [
                    {
                        src: './img/section-06-01.png',
                        shadow: false
                    }
                ],
                elements: [
                    {
                        src: './img/artist-course-08-480x480.jpg',
                        price: 18,
                        title: 'The Acrylic Painting Academy',
                        lessons: 4,
                        students: 50
                    },
                    {
                        src: './img/artist-course-07-480x480.jpg',
                        price: 21,
                        title: 'Drawing and Shading: Complete Course',
                        lessons: 14,
                        students: 50
                    },
                    {
                        src: './img/artist-course-06-480x480.jpg',
                        price: 19,
                        title: 'The Color Theory for Digital Artist',
                        lessons: 7,
                        students: 50
                    },
                    {
                        src: './img/artist-course-05-480x480.jpg',
                        price: 35,
                        title: 'Ultimate Guide to Digital Sketching for Beginner',
                        lessons: 14,
                        students: 50
                    },
                    {
                        src: './img/artist-course-04-480x480.jpg',
                        price: 19,
                        title: 'Portrait Drawing The Smart Way',
                        lessons: 2,
                        students: 50
                    },
                    {
                        src: './img/artist-course-03-480x480.jpg',
                        price: 19,
                        title: 'Mastering Watercolor Painting from Beginner',
                        lessons: 9,
                        students: 50
                    },
                    {
                        src: './img/artist-course-02-480x480.jpg',
                        price: 25,
                        title: 'The Art & Science of Drawing',
                        lessons: 4,
                        students: 50
                    },
                    {
                        src: './img/artist-course-01-480x480.jpg',
                        price: 22,
                        title: 'The Colored Pencil Drawing Course',
                        lessons: 6,
                        students: 50
                    }
                ]
            },
            section7: {
                elements: [
                    {
                        src: './img/section-07-01.jpeg',
                        title: 'Brush Strokes Energize Trees in Paintings',
                        date: 'May 15, 2020',
                        views: '1,499'
                    },
                    {
                        src: './img/section-07-02.jpg',
                        title: 'Connection Between Self-Portraits and Identity',
                        date: 'May 15, 2020',
                        views: '1,528'
                    },
                    {
                        src: './img/section-07-03.jpg',
                        title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                        date: 'May 15, 2020',
                        views: '1,370'
                    }
                ],
            },
            section8: {
                elements: [
                    {
                        src: './img/section-08-01.jpg',
                        date: 'apr 22, 2021',
                        title: 'Storytelling Workshop',
                        position: 'Texas, US'
                    },
                    {
                        src: './img/section-08-02.jpg',
                        date: 'otc 10, 2020',
                        title: 'Painting Art Contest 2020',
                        position: 'New York, US'
                    },
                    {
                        src: './img/section-08-03.jpg',
                        date: 'nov 23, 2020',
                        title: 'International Art Fair 2020',
                        position: 'Hamburg, Germany'
                    },
                    {
                        src: './img/section-08-04.jpg',
                        date: 'DEC 15, 2020',
                        title: 'Street Performance: Call for Artist',
                        position: 'Illinois, US'
                    }
                ]
            },
            section9: {
                bg: [
                    {
                        src: './img/section-09-01.png',
                        shadow: false
                    },
                    {
                        src: './img/section-09-02.png',
                        shadow: false
                    }
                ]
            }
        },
        footer: {
            address: [
                {
                    text: '382 NE 191st St # 87394 Miami, FL 33179-3899',
                    link: false
                },
                {
                    text: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                    link: false
                },
                {
                    text: 'support@maxcoach.com',
                    link: '#'
                }
            ],
            credits: {
                text: '© 2020 Maxcoach. All Rights Reserved'
            },
            explore: [
                {
                    text: 'Start here',
                    link: '#'
                },
                {
                    text: 'Success story',
                    link: '#'
                },
                {
                    text: 'Blog',
                    link: '#'
                },
                {
                    text: 'Courses',
                    link: '#'
                },
                {
                    text: 'Contact us',
                    link: '#'
                }
            ],
            information: [
                {
                    text: 'Membership',
                    link: '#'
                },
                {
                    text: 'Purchase guise',
                    link: '#'
                },
                {
                    text: 'Privacy policy',
                    link: '#'
                },
                {
                    text: 'Terms of services',
                    link: '#'
                }
            ],
            instagram: {
                tag: '@maxcoach',
                images: [
                    {
                        src: './img/footer-01.jpg',
                        link: '#'
                    },
                    {
                        src: './img/footer-02.jpg',
                        link: '#'
                    },
                    {
                        src: './img/footer-03.jpg',
                        link: '#'
                    }
                ]
            },
            socials: [
                {
                    name: 'facebook',
                    link: '#',
                    classes: 'fa-brands fa-square-facebook'
                },
                {
                    name: 'twitter',
                    link: '#',
                    classes: 'fa-brands fa-twitter'
                },
                {
                    name: 'instagram',
                    link: '#',
                    classes: 'fa-brands fa-instagram'
                },
                {
                    name: 'linkedin',
                    link: '#',
                    classes: 'fa-brands fa-linkedin'
                }
            ]
        },
        idxSlider: 0,
        cardsDisplayed: 3,
        gap: 50
    },
    methods: {
        cardWidth() {
            const gapVisible = this.gap * (this.cardsDisplayed - 1);
            const widthSlider = document.querySelector('.slider').offsetWidth;

            return 'width:' + (widthSlider - gapVisible) / this.cardsDisplayed + 'px;';
        },
        slide(i) {
            const move = i - this.idxSlider;
            const gapVisible = this.gap * (this.cardsDisplayed - 1);
            const widthSlider = document.querySelector('.slider').offsetWidth;
            const width = (widthSlider - gapVisible) / this.cardsDisplayed;
            const sliding = (width + this.gap) * move;

            document.querySelector('.slider').scrollBy(sliding, 0);

            this.idxSlider = i;
        }
    },
    mounted() {
        const hh = document.querySelector('#hh');
        const mm = document.querySelector('#mm');
        const ss = document.querySelector('#ss');
        const header = document.querySelector('header');
        const btnTop = document.querySelector('.btn-top');
        let oldScroll = newScroll = 0;

        const countdown = setInterval(() => {
            let now = new Date();
            hh.innerText = (23 - now.getHours() < 10 ? '0' : '') + (23 - now.getHours());
            mm.innerText = (59 - now.getMinutes() < 10 ? '0' : '') + (59 - now.getMinutes());
            ss.innerText = (59 - now.getSeconds() < 10 ? '0' : '') + (59 - now.getSeconds());
        }, 1000);

        btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

        window.onscroll = function(e) {
            newScroll = window.pageYOffset;

            if (newScroll >= 130 && newScroll < 150)
                header.classList.add('hide');
            else if (newScroll >= 150)
                header.classList.add('show');
            else
                header.classList.remove('hide', 'show');

            if (newScroll >= 130 && oldScroll > newScroll)
                btnTop.style.cssText = 'opacity:1; visibility:visible;';
            else
                btnTop.style.cssText = '';

            oldScroll = newScroll;
        }
    }
});
Vue.config.devtools = true;