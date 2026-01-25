import { useNavigate } from 'react-router-dom';

interface BreadcrumsProps{
    title: string;
}

const Breadcrums = ({title}: BreadcrumsProps) => {
      const navigate = useNavigate();
  
  return (
    <div className="max-w-6xl mx-auto my-6 px-4 sm:px-6">
      <nav className="text-sm sm:text-base text-gray-600 flex flex-wrap items-center gap-1 sm:gap-2">
        
        {/* Home Link */}
        <span
          className="cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => navigate('/')}
        >
          Home
        </span>
        <span className="text-gray-400">/</span>

          {/* Products Link */}
        <span
          className="cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => navigate('/products')}
        >
          Products
        </span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-800 font-semibold truncate max-w-xs sm:max-w-sm">{title}</span>
      </nav>
    </div>
  );
};

export default Breadcrums;