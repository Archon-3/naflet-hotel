import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Camera, MapPin, Phone, Mail, Calendar, 
  Save, Edit, ChevronRight, CreditCard, Award,
  Eye, Gift
} from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8901",
    address: "123 Main Street, Anytown, USA",
    bio: "Travel enthusiast and food lover. Always looking for comfortable stays with great amenities.",
    bookings: [
      { id: "BK8294", room: "Executive Room", date: "Oct 15-18, 2023", price: "$480", status: "Completed" },
      { id: "BK7182", room: "Family Room", date: "Aug 3-7, 2023", price: "$880", status: "Completed" },
      { id: "BK9435", room: "Deluxe Room", date: "Dec 22-26, 2023", price: "$360", status: "Upcoming" }
    ],
    rewards: 1250,
    memberSince: "January 2022",
    preferences: {
      roomType: "Executive Room",
      floor: "Higher Floor",
      specialRequests: "Room away from elevator"
    }
  });

  // Form data for editing
  const [formData, setFormData] = useState({...userData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveChanges = () => {
    setUserData({...formData});
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setFormData({...userData});
    setIsEditing(false);
  };

  return (
    <div className="profile-page" style={{ 
      backgroundColor: "#1a202c", 
      minHeight: "100vh",
      color: "white",
      paddingBottom: "40px"
    }}>
      {/* Header with navigation */}
      <header style={{
        backgroundColor: "#1a1b1e",
        borderBottom: "1px solid rgb(79, 70, 229)",
        padding: "16px 0",
        marginBottom: "40px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div 
            style={{ 
              color: "rgb(79, 70, 229)", 
              fontSize: "28px", 
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={() => navigate('/HomePage')}
          >
            Naflet Hotel
          </div>

          <nav style={{
            display: "flex",
            gap: "40px",
            alignItems: "center"
          }}>
            {[
              { name: "Home", path: "/HomePage" },
              { name: "Rooms", path: "/Rooms" },
              { name: "Experience", path: "/Experience" },
              { name: "Gallery", path: "/Gallery" },
              { name: "Contact", path: "/Contact" }
            ].map((item) => (
              <a
                key={item.name}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "color 0.3s"
                }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "rgb(79, 70, 229)"}
                onMouseOut={(e) => e.currentTarget.style.color = "white"}
              >
                {item.name}
              </a>
            ))}
            
            <button
              style={{
                backgroundColor: "rgb(79, 70, 229)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
                transition: "background-color 0.3s"
              }}
              onClick={() => navigate('/BookNowPage')}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgb(67, 56, 202)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgb(79, 70, 229)"}
            >
              Book Now
            </button>
          </nav>
        </div>
      </header>

      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px"
        }}>
          {/* Profile Header */}
          <div style={{
            backgroundColor: "#1a1b1e",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid rgba(79, 70, 229, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px"
          }}>
            <div style={{
              position: "relative",
              width: "120px",
              height: "120px"
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgb(79, 70, 229)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: "bold",
                color: "white"
              }}>
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "#2D3748",
                border: "2px solid #1a1b1e",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <Camera size={20} color="white" />
              </button>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <h1 style={{ 
                fontSize: "32px", 
                marginBottom: "8px",
                color: "white" 
              }}>
                {userData.name}
              </h1>
              <p style={{ 
                color: "#9CA3AF", 
                marginBottom: "16px" 
              }}>
                Member since {userData.memberSince}
              </p>
              
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <div style={{ 
                    color: "rgb(79, 70, 229)", 
                    fontWeight: "bold", 
                    fontSize: "24px" 
                  }}>
                    {userData.bookings.length}
                  </div>
                  <div style={{ color: "#9CA3AF", fontSize: "14px" }}>Bookings</div>
                </div>
                
                <div style={{ width: "1px", backgroundColor: "rgba(79, 70, 229, 0.3)", height: "40px" }}></div>
                
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <div style={{ 
                    color: "rgb(79, 70, 229)", 
                    fontWeight: "bold", 
                    fontSize: "24px" 
                  }}>
                    {userData.rewards}
                  </div>
                  <div style={{ color: "#9CA3AF", fontSize: "14px" }}>Reward Points</div>
                </div>
                
                <div style={{ width: "1px", backgroundColor: "rgba(79, 70, 229, 0.3)", height: "40px" }}></div>
                
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <div style={{ 
                    color: "rgb(79, 70, 229)", 
                    fontWeight: "bold", 
                    fontSize: "24px" 
                  }}>
                    {userData.bookings.filter(b => b.status === "Upcoming").length}
                  </div>
                  <div style={{ color: "#9CA3AF", fontSize: "14px" }}>Upcoming Stays</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs & Content */}
          <div style={{
            backgroundColor: "#1a1b1e",
            borderRadius: "16px",
            border: "1px solid rgba(79, 70, 229, 0.3)",
            overflow: "hidden"
          }}>
            {/* Tabs */}
            <div style={{
              display: "flex",
              borderBottom: "1px solid rgba(79, 70, 229, 0.3)",
              overflowX: "auto"
            }}>
              {[
                { id: 'personal', label: 'Personal Info' },
                { id: 'bookings', label: 'My Bookings' },
                { id: 'rewards', label: 'Rewards' },
                { id: 'preferences', label: 'Preferences' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: activeTab === tab.id ? "white" : "#9CA3AF",
                    padding: "16px 24px",
                    borderBottom: activeTab === tab.id ? "2px solid rgb(79, 70, 229)" : "2px solid transparent",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div style={{ padding: "32px" }}>
              {/* Personal Information Tab */}
              {activeTab === 'personal' && (
                <div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px"
                  }}>
                    <h2 style={{ fontSize: "24px", color: "white" }}>Personal Information</h2>
                    
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid rgba(79, 70, 229, 0.5)",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          color: "white",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "background-color 0.3s"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.1)"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <Edit size={18} /> Edit Profile
                      </button>
                    ) : (
                      <div style={{ display: "flex", gap: "12px" }}>
                        <button
                          onClick={cancelEdit}
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid rgba(79, 70, 229, 0.5)",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            color: "white",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.1)"}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveChanges}
                          style={{
                            backgroundColor: "rgb(79, 70, 229)",
                            border: "none",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            color: "white",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "background-color 0.3s"
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgb(67, 56, 202)"}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgb(79, 70, 229)"}
                        >
                          <Save size={18} /> Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                    marginBottom: "24px"
                  }}>
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                        Full Name
                      </label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name} 
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      ) : (
                        <div style={{
                          padding: "12px",
                          backgroundColor: "#2D3748",
                          borderRadius: "8px",
                          fontSize: "16px"
                        }}>
                          {userData.name}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                        Email Address
                      </label>
                      {isEditing ? (
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      ) : (
                        <div style={{
                          padding: "12px",
                          backgroundColor: "#2D3748",
                          borderRadius: "8px",
                          fontSize: "16px"
                        }}>
                          {userData.email}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      ) : (
                        <div style={{
                          padding: "12px",
                          backgroundColor: "#2D3748",
                          borderRadius: "8px",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}>
                          <Phone size={16} />
                          {userData.phone}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                        Address
                      </label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      ) : (
                        <div style={{
                          padding: "12px",
                          backgroundColor: "#2D3748",
                          borderRadius: "8px",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}>
                          <MapPin size={16} />
                          {userData.address}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                      Bio
                    </label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "12px",
                          backgroundColor: "#2D3748",
                          border: "1px solid rgb(79, 70, 229)",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: "16px",
                          resize: "vertical"
                        }}
                      ></textarea>
                    ) : (
                      <div style={{
                        padding: "12px",
                        backgroundColor: "#2D3748",
                        borderRadius: "8px",
                        fontSize: "16px",
                        lineHeight: "1.5"
                      }}>
                        {userData.bio || "No bio provided."}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div>
                  <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "white" }}>My Bookings</h2>
                  
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "32px"
                  }}>
                    {userData.bookings.map((booking, index) => (
                      <div
                        key={booking.id}
                        style={{
                          backgroundColor: "#2D3748",
                          padding: "24px",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "16px",
                          transition: "transform 0.3s",
                          border: booking.status === "Upcoming" ? "1px solid rgb(79, 70, 229)" : "none"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.01)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                      >
                        <div>
                          <div style={{ 
                            color: "rgb(79, 70, 229)", 
                            marginBottom: "8px",
                            fontSize: "14px"
                          }}>
                            Booking ID: {booking.id}
                          </div>
                          <div style={{ 
                            fontSize: "20px", 
                            fontWeight: "500",
                            marginBottom: "4px",
                            color: "white"
                          }}>
                            {booking.room}
                          </div>
                          <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            gap: "8px",
                            color: "#9CA3AF"
                          }}>
                            <Calendar size={16} />
                            {booking.date}
                          </div>
                        </div>
                        
                        <div style={{ textAlign: "right" }}>
                          <div style={{ 
                            fontSize: "24px", 
                            fontWeight: "bold", 
                            color: "rgb(79, 70, 229)",
                            marginBottom: "8px"
                          }}>
                            {booking.price}
                          </div>
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            justifyContent: "flex-end"
                          }}>
                            <span style={{
                              display: "inline-block",
                              padding: "4px 12px",
                              borderRadius: "99px",
                              fontSize: "14px",
                              backgroundColor: booking.status === "Upcoming" ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.1)",
                              color: booking.status === "Upcoming" ? "rgb(79, 70, 229)" : "#9CA3AF"
                            }}>
                              {booking.status}
                            </span>
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "1px solid rgb(79, 70, 229)",
                                borderRadius: "8px",
                                padding: "8px 16px",
                                color: "white",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                transition: "background-color 0.3s"
                              }}
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.1)"}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                            >
                              <Eye size={16} /> View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ 
                    marginTop: "32px", 
                    textAlign: "center"
                  }}>
                    <p style={{ color: "#9CA3AF", marginBottom: "16px" }}>Looking for more comfort on your next stay?</p>
                    <button
                      style={{
                        backgroundColor: "rgb(79, 70, 229)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px 24px",
                        color: "white",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background-color 0.3s"
                      }}
                      onClick={() => navigate('/Rooms')}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgb(67, 56, 202)"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgb(79, 70, 229)"}
                    >
                      Book Another Stay <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Rewards Tab */}
              {activeTab === 'rewards' && (
                <div>
                  <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "white" }}>Rewards Program</h2>
                  
                  <div style={{
                    backgroundColor: "#2D3748",
                    borderRadius: "12px",
                    padding: "32px",
                    marginBottom: "32px",
                    textAlign: "center"
                  }}>
                    <div style={{ marginBottom: "16px" }}>
                      <Award size={48} color="rgb(79, 70, 229)" style={{ margin: "0 auto 16px" }} />
                      <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>Your Rewards</h3>
                      <p style={{ color: "#9CA3AF", marginBottom: "24px" }}>
                        Earn points with every stay and redeem them for exclusive benefits
                      </p>
                    </div>
                    
                    <div style={{
                      width: "100%",
                      maxWidth: "320px",
                      margin: "0 auto 24px",
                      position: "relative"
                    }}>
                      <div style={{
                        backgroundColor: "#1a1b1e",
                        height: "8px",
                        borderRadius: "4px",
                        marginBottom: "8px"
                      }}>
                        <div style={{
                          backgroundColor: "rgb(79, 70, 229)",
                          height: "100%",
                          borderRadius: "4px",
                          width: `${Math.min((userData.rewards / 5000) * 100, 100)}%`
                        }}></div>
                      </div>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "14px",
                        color: "#9CA3AF"
                      }}>
                        <span>0</span>
                        <span>{userData.rewards} / 5000 Points</span>
                      </div>
                    </div>
                    
                    <div style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "rgb(79, 70, 229)",
                      marginBottom: "8px"
                    }}>
                      Silver Member
                    </div>
                    <p style={{ color: "#9CA3AF", marginBottom: "24px" }}>
                      {5000 - userData.rewards} more points until Gold status
                    </p>
                    
                    <button
                      style={{
                        backgroundColor: "rgb(79, 70, 229)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px 24px",
                        color: "white",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background-color 0.3s"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgb(67, 56, 202)"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgb(79, 70, 229)"}
                    >
                      <Gift size={18} /> Redeem Rewards
                    </button>
                  </div>
                  
                  <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "white" }}>Available Benefits</h3>
                  
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "16px",
                    marginBottom: "32px"
                  }}>
                    {[
                      { name: "Free Night Stay", points: 2500, available: false },
                      { name: "Room Upgrade", points: 1000, available: true },
                      { name: "Spa Credit", points: 750, available: true },
                      { name: "Late Checkout", points: 500, available: true },
                      { name: "Airport Transfer", points: 1200, available: true },
                      { name: "Dining Credit", points: 800, available: true }
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: "#2D3748",
                          padding: "16px",
                          borderRadius: "8px",
                          opacity: benefit.available ? 1 : 0.6,
                          transition: "transform 0.3s"
                        }}
                        onMouseOver={(e) => benefit.available && (e.currentTarget.style.transform = "translateY(-5px)")}
                        onMouseOut={(e) => benefit.available && (e.currentTarget.style.transform = "translateY(0)")}
                      >
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px"
                        }}>
                          <div style={{ fontWeight: "500" }}>{benefit.name}</div>
                          <div style={{
                            backgroundColor: benefit.available ? "rgba(79, 70, 229, 0.2)" : "rgba(100, 100, 100, 0.2)",
                            color: benefit.available ? "rgb(79, 70, 229)" : "#9CA3AF",
                            fontSize: "14px",
                            padding: "4px 8px",
                            borderRadius: "4px"
                          }}>
                            {benefit.points} Points
                          </div>
                        </div>
                        
                        <button
                          disabled={!benefit.available}
                          style={{
                            width: "100%",
                            padding: "8px",
                            backgroundColor: benefit.available ? "rgba(79, 70, 229, 0.1)" : "rgba(100, 100, 100, 0.1)",
                            color: benefit.available ? "white" : "#9CA3AF",
                            border: benefit.available ? "1px solid rgba(79, 70, 229, 0.3)" : "1px solid rgba(100, 100, 100, 0.3)",
                            borderRadius: "6px",
                            cursor: benefit.available ? "pointer" : "not-allowed",
                            transition: "background-color 0.3s"
                          }}
                          onMouseOver={(e) => benefit.available && (e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.2)")}
                          onMouseOut={(e) => benefit.available && (e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.1)")}
                        >
                          {benefit.available ? "Redeem" : "Not Available"}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ color: "#9CA3AF", fontSize: "14px" }}>
                    <p>* Points are earned at a rate of 10 points per $1 spent on room bookings.</p>
                    <p>* Additional points can be earned through dining and spa services.</p>
                  </div>
                </div>
              )}
              
              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div>
                  <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "white" }}>Stay Preferences</h2>
                  
                  <div style={{
                    backgroundColor: "#2D3748",
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "32px"
                  }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "white" }}>Room Preferences</h3>
                    
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "24px",
                      marginBottom: "24px"
                    }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                          Preferred Room Type
                        </label>
                        <select
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#1a1b1e",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                          value={userData.preferences.roomType}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              preferences: {
                                ...userData.preferences,
                                roomType: e.target.value
                              }
                            });
                          }}
                        >
                          <option>Family Room</option>
                          <option>Executive Room</option>
                          <option>Royal Room</option>
                          <option>Deluxe Room</option>
                          <option>No Preference</option>
                        </select>
                      </div>
                      
                      <div>
                        <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                          Preferred Floor
                        </label>
                        <select
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#1a1b1e",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                          value={userData.preferences.floor}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              preferences: {
                                ...userData.preferences,
                                floor: e.target.value
                              }
                            });
                          }}
                        >
                          <option>Ground Floor</option>
                          <option>Higher Floor</option>
                          <option>No Preference</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "500" }}>
                        Special Requests
                      </label>
                      <textarea
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "12px",
                          backgroundColor: "#1a1b1e",
                          border: "1px solid rgb(79, 70, 229)",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: "16px",
                          resize: "vertical"
                        }}
                        value={userData.preferences.specialRequests}
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            preferences: {
                              ...userData.preferences,
                              specialRequests: e.target.value
                            }
                          });
                        }}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div style={{
                    backgroundColor: "#2D3748",
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "32px"
                  }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "white" }}>Notification Preferences</h3>
                    
                    {[
                      { label: "Booking Confirmations", description: "Receive notifications for booking confirmations" },
                      { label: "Special Offers", description: "Get notified about promotions and special offers" },
                      { label: "Payment Reminders", description: "Receive reminders about upcoming payments" },
                      { label: "Newsletter", description: "Subscribe to our monthly newsletter" }
                    ].map((pref, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "16px 0",
                          borderBottom: index < 3 ? "1px solid rgba(79, 70, 229, 0.2)" : "none"
                        }}
                      >
                        <div>
                          <div style={{ marginBottom: "4px", color: "white" }}>{pref.label}</div>
                          <div style={{ color: "#9CA3AF", fontSize: "14px" }}>{pref.description}</div>
                        </div>
                        
                        <label style={{
                          position: "relative",
                          display: "inline-block",
                          width: "60px",
                          height: "34px"
                        }}>
                          <input 
                            type="checkbox" 
                            defaultChecked={index < 2}
                            style={{
                              opacity: 0,
                              width: 0,
                              height: 0
                            }}
                          />
                          <span style={{
                            position: "absolute",
                            cursor: "pointer",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: index < 2 ? "rgb(79, 70, 229)" : "#1a1b1e",
                            borderRadius: "34px",
                            transition: "0.4s",
                            border: "1px solid rgba(79, 70, 229, 0.5)"
                          }}></span>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ 
                    display: "flex",
                    justifyContent: "flex-end"
                  }}>
                    <button
                      style={{
                        backgroundColor: "rgb(79, 70, 229)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px 24px",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background-color 0.3s"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgb(67, 56, 202)"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgb(79, 70, 229)"}
                    >
                      <Save size={18} /> Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;