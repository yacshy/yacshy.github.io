import './index.scss'

export default function Home() {
    const slogn = ['他山之石', '可以攻玉']

    return (
        <>
            <div className='slogn-warp'>
                {slogn.map((word) => {
                    return (
                        <div className='word'>
                            {word.split('').map((chart) => {
                                return <span className='slogn'>{chart}</span>
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
