import cardIcon from "../assets/images/card-icon.svg";

function AboutPage() {
    return (
        <main>
            <section className="about">
                <div className="container">
                    <h2 className="title text-light">О проекте</h2>
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
        </main>
    );
}

export default AboutPage;