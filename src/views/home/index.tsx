import scss from './index.module.scss'

export default function Home() {
    return (
        <div className={scss.homeContainer}>
            <section className={scss.content}>
                <div className={scss.title}>
                    <span className={scss.text}>个人作品</span>
                </div>
                <div className={scss.title}>
                    <span className={scss.text}>快速文档</span>
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
