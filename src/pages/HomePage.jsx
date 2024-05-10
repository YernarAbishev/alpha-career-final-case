import mainImage from "../assets/images/main-image.svg";
import mainLogo from "../assets/images/main-logo.svg";
import cardIcon from "../assets/images/card-icon.svg";

import { Link } from "react-router-dom";
import {ABOUT_PAGE_ROUTE, GUIDES_PAGE_ROUTE, VACANCIES_PAGE_ROUTE} from "../utils/consts";

function HomePage() {
    return (
        <main>
            <section className="home">
                <div className="container">
                    <div className="columns">
                        <div className="home-left is-6">
                            <img src={mainLogo} className="home__logo" alt="Main logo" />
                            <h1 className="home__title">Добро пожаловать в Alpha Career Center!</h1>
                            <p className="home__description">
                                Alpha Career Center - это инновационная платформа, предназначенная для тех, кто ищет работу в сфере информационных технологий. Мы предлагаем уникальные возможности по поиску работы, а также ценные советы и ресурсы для развития в IT-индустрии.
                            </p>
                            <div className="home__button-group">
                                <Link to={VACANCIES_PAGE_ROUTE} className="button is-primary mr-10">Вакансии</Link>
                                <Link to={GUIDES_PAGE_ROUTE} className="button is-primary mr-10">Гайды</Link>
                                <Link to="https://alphaedu.tech/" target={"_blank"} className="button is-primary mr-10">Курсы</Link>
                                <Link to={ABOUT_PAGE_ROUTE} className="button is-primary mr-10">О проекте</Link>
                            </div>
                        </div>
                        <div className="home-right is-6">
                            <img src={mainImage} alt="Home" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <h2 className="title text-light">Что мы предлагаем?</h2>
                    <div className="grid">
                        <div className="about__card">
                            <div className="about__image">
                                <img src={cardIcon} alt="Icon" />
                            </div>
                            <h3 className="about__title">Поиск работы</h3>
                            <p className="about__description">
                                Мы предоставляем мощный инструмент для поиска вакансий в сфере IT. Наша платформа связывает работодателей и талантливых специалистов, обеспечивая эффективное взаимодействие между ними. Вы сможете просматривать актуальные вакансии, опубликованные нашими партнерами-работодателями, и отправлять свои резюме напрямую через нашу платформу.
                            </p>
                        </div>
                        <div className="about__card">
                            <div className="about__image">
                                <img src={cardIcon} alt="Icon" />
                            </div>
                            <h3 className="about__title">Гайды и советы</h3>
                            <p className="about__description">
                                Мы понимаем, что начало карьеры в IT может быть сложным. Поэтому мы предоставляем ценные советы и гайды, которые помогут вам успешно преодолеть вызовы, с которыми вы можете столкнуться на пути к своей мечте. Наши эксперты-наставники, с опытом работы в IT-индустрии, делятся своими знаниями и лучшими практиками, чтобы помочь вам развить свои навыки и достичь профессионального роста.
                            </p>
                        </div>
                        <div className="about__card">
                            <div className="about__image">
                                <img src={cardIcon} alt="Icon" />
                            </div>
                            <h3 className="about__title">Менторство</h3>
                            <p className="about__description">
                                Мы предлагаем программу менторства, где вы можете получить персональное сопровождение от опытных профессионалов IT. Менторы помогут вам разработать персональную стратегию карьеры, давая ценные советы и обратную связь на каждом этапе вашего профессионального развития.
                            </p>
                        </div>
                        <div className="about__card">
                            <div className="about__image">
                                <img src={cardIcon} alt="Icon" />
                            </div>
                            <h3 className="about__title">Курсы</h3>
                            <p className="about__description">
                                Наша платформа предоставляет доступ к богатому набору туториалов и онлайн-курсов по различным областям IT. Вы сможете учиться новым навыкам, повышать свою квалификацию и получать сертификаты, которые будут оцениваться работодателями.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="motivation">
                <div className="container">
                    <div className="quote">
                        <p>Выпускники и обучающиеся <span className="text-primary">Alpha Tech Edu</span> имеют особые преимущества при использовании нашей платформы. Мы работаем над тем, чтобы гарантировать, что ваше образование сопровождается возможностями для успешной карьеры в IT. </p>
                    </div>
                </div>
            </section>
            <div className="marquee">
                <div className="scroll-text">
                    Присоединитесь к Alpha Career Center уже сегодня и дайте своей карьере в IT новый импульс!
                </div>
            </div>
        </main>
    );
}

export default HomePage;