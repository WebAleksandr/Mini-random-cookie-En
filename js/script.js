
let arrText = [
    'Your road to glory will be rocky, but fulfilling.',
    'Nothing is impossible to a willing heart.',
    'Don’t worry about money. The best things in life are free.',
    'Don’t pursue happiness – create it.',
    'All things are difficult before they are easy.',
    'If you want the rainbow, you have to tolerate the rain.',
    'Success lies in the hands of those who wants it.',
    'Big journeys begin with a single step.',
    'People learn little from success, but much from failure.',
    'Be not afraid of growing slowly, be afraid only of standing still.',
    'We must always have old memories and young hopes.',
    'Happiness isn’t an outside job, it’s an inside job.',
    'Your wisdom makes you superior to others',
    'Never do anything halfway.',
    'You are amazing in many ways.',
    'Don’t be pushed by problems. Be led by dreams.',
    'Knowledge is power, but enthusiasm pulls the switch.',
    'The beginning is always hardest. That’s why you should never give up.',
    'Shake the world today. It can take it.',
    'You can’t control the wind, but you can adjust the sails.',
    'As long as you don’t do anything new, you’ll be fine',
    'I can’t help you, for I am but a cookie.',
    'Success comes before work … only in the dictionary.',
    'Error 404: Wisdom not found. :)',
    'A new outlook brightens your image and brings new friends.',
    'All of your hard work will soon pay off',
    'A new adventure awaits you this weekend.',
    'You will soon feel a renewed sense of optimism for the future.',
    'Why stop your revolution just because it’s the weekend?',
    'Stop worrying and take a chance',
    'Don’t be afraid to dream big, be afraid of not trying at all.',
    'Your spirit of adventure leads you down an exciting new path.',
    'There is a massive amount of opportunity sitting right under your nose.',
    'Your life feels full and satisfying… Or at least your stomach does.',
    'I never dreamed about success. I worked for it.',
    'It is never too late to be what you might have been.',
    'A gathering of friends will bring you luck.',
    'Work with what you have.',
    'You have good reason to be self-confident.',
    'Learn how to do something new today',
    'Pursue your dreams with vigor.',
    'Show everyone what you can do.',
    'Good luck comes from good planning.',
    'Grasp the opportunities that come your way.',
];

const cookiesBtn = document.querySelectorAll('.btn'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal-close'),
    modalConteiner = document.querySelector('.modal-container'),
    textRandom = document.querySelector('.cookies-text');

let coutn = 0;
cookiesBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        let randomText = arrText[Math.floor(Math.random() * arrText.length)];
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        textRandom.textContent = randomText;
        coutn++;
        console.log(coutn)
        if (coutn >= 3 && coutn < 4) {
            textRandom.textContent = 'The fortune you seek is in another cookie'
        } else {
            textRandom.textContent = randomText;
        }
    })


})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
    document.body.style.overflow = '';
})















