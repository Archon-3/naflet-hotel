import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Bath, Coffee, Tv, Users, MapPin, Star, ChevronDown, Filter, BedDouble, ParkingSquare, Wine, Waves } from 'lucide-react';

const RoomsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const amenities = [
    { icon: <Wifi size={20} />, label: 'Free WiFi' },
    { icon: <Bath size={20} />, label: 'Bathtub' },
    { icon: <Coffee size={20} />, label: 'Coffee Maker' },
    { icon: <Tv size={20} />, label: 'Smart TV' },
    { icon: <ParkingSquare size={20} />, label: 'Free Parking' },
    { icon: <Wine size={20} />, label: 'Mini Bar' },
    { icon: <Waves size={20} />, label: 'Pool Access' },
  ];

  const rooms = [
    {
      id: 1,
      name: "Family Room",
      type: "family",
      price: 299,
      size: "45m²",
      capacity: 4,
      rating: 4.7,
      description: "Spacious room perfect for families with two double beds and modern amenities",
      amenities: amenities.slice(0, 6),
      images: ["family-1", "family-2"],
      popular: true
    },
    {
      id: 2,
      name: "Executive Room",
      type: "executive",
      price: 259,
      size: "35m²",
      capacity: 2,
      rating: 4.8,
      description: "Elegant room designed for business travelers with work desk and premium features",
      amenities: amenities,
      images: ["executive-1", "executive-2"],
      popular: true
    },
    {
      id: 3,
      name: "Classic Twin",
      type: "classic",
      price: 199,
      size: "30m²",
      capacity: 2,
      rating: 4.5,
      description: "Comfortable room with twin beds, perfect for friends or business colleagues",
      amenities: amenities.slice(0, 4),
      images: ["twin-1", "twin-2"]
    },
    {
      id: 4,
      name: "Classic Room",
      type: "classic",
      price: 189,
      size: "28m²",
      capacity: 2,
      rating: 4.6,
      description: "Cozy room with a queen bed and essential amenities for a pleasant stay",
      amenities: amenities.slice(0, 5),
      images: ["classic-1", "classic-2"]
    }
  ];

  const filters = ['all', 'classic', 'executive', 'family'];

  const filteredRooms = selectedFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Rooms</h1>
        <p className="text-gray-400 text-lg">
          Discover our collection of thoughtfully designed rooms and suites
        </p>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-lg"
          >
            <Filter size={20} />
            Filters
            <ChevronDown size={16} />
          </motion.button>

          <div className="flex gap-3">
            {filters.map(filter => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg capitalize ${selectedFilter === filter ? 'bg-indigo-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Amenities</label>
                  <div className="grid grid-cols-2 gap-2">
                    {amenities.slice(0, 4).map((amenity, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded bg-gray-700" />
                        {amenity.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Room Size</label>
                  <select className="w-full bg-gray-700 rounded-lg p-2">
                    <option>Any Size</option>
                    <option>25-30m²</option>
                    <option>30-40m²</option>
                    <option>40m²+</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <motion.div
            key={room.id}
            whileHover={{ y: -8 }}
            className="bg-gray-800 rounded-xl overflow-hidden"
          >
            {/* Room Image */}
            <div className="relative h-64 bg-gray-700">
              {room.popular && (
                <div className="absolute top-4 right-4 bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
            </div>

            {/* Room Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{room.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <BedDouble size={16} />
                    <span>{room.size}</span>
                    <span>•</span>
                    <Users size={16} />
                    <span>Up to {room.capacity}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="font-medium">{room.rating}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                {room.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.amenities.slice(0, 4).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-1 text-sm text-gray-400">
                    {amenity.icon}
                  </div>
                ))}
                {room.amenities.length > 4 && (
                  <span className="text-sm text-gray-400">+{room.amenities.length - 4} more</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${room.price}</span>
                  <span className="text-gray-400">/night</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 px-6 py-2 rounded-lg font-medium"
                  animate={{
                    backgroundColor: 'rgba(79, 70, 229, 1)', // This is the animatable color
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
