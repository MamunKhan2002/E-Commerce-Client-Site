import SectionButton from '../../Components/SectionButton';
import best_selling from "../../assets/today_special-6d01810cf4c6efe6028ea84af31999e2.jpg"

const TopSellProducts = () => {
    return (
        <section>
            <div className='pb-6  border-b-[1PX] border-slate-500'>
                <SectionButton title="Best Selling Products" image={best_selling} />
            </div>
        </section>
    );
};

export default TopSellProducts;