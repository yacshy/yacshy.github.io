import scss from './index.module.scss'
import nodejspng from '@/assets/icon/nodejs.png'
import workJson from '@/database/work/index.json'

export default function Home() {
    return (
        <div className={scss.homeContainer}>
            <section className={scss.content}>
                <div className={scss.title}>
                    <span className={scss.text}>个人作品</span>
                </div>

                <div className={scss.cardList}>
                    {workJson.map((work, index) => {
                        return (
                            <div className={work.error ? scss.workCardItemErr : scss.workCardItemSta} key={index}>
                                <span>{work.title}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={scss.title}>
                    <span className={scss.text}>快速文档</span>
                </div>

                <div className={scss.cardList}>
                    <div className={scss.refCardItem}>
                        <img src={nodejspng} className={scss.cover} />
                        <span className={scss.text}>NodeJs</span>
                    </div>
                </div>

                <div className={scss.title}>
                    <span className={scss.text}>快速工具</span>
                </div>

                <div className={scss.title}>
                    <span className={scss.text}>奇技淫巧</span>
                </div>
            </section>
        </div>
    )
}
