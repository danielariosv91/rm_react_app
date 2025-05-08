import { useNavigate } from 'react-router-dom';

export default function CardItem({ item }) {
    const navigate = useNavigate();

    const handleNavigate = (event, id) => {
        event.stopPropagation();
        navigate(`/character/${id}`);
    }

    return (
        <div className="card bg-zinc-100 w-96 shadow-sm">
            <img
                src={item.image}
                alt="Shoes" />
            <div className="card-body text-base-100">
                <h2 className="card-title">{item.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
