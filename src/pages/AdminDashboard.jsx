// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');
//   const [students, setStudents] = useState([]);
//   const [registrations, setRegistrations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [showModal, setShowModal] = useState(false);
  
//   // Sample data for demonstration
//   const sampleStudents = [
//     {
//       id: 1,
//       fullName: 'Selam Tesfaye',
//       age: 22,
//       weight: 55,
//       height: 175,
//       sex: 'Female',
//       phone: '+251 912 345 678',
//       idNumber: 'ET1234567',
//       talent: 'Catwalk',
//       language: 'Amharic & English',
//       course: 'Professional Modeling',
//       courseDuration: '6 Months',
//       status: 'Active',
//       registeredDate: '2024-01-15',
//       profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
//     },
//     {
//       id: 2,
//       fullName: 'Dawit Mekonnen',
//       age: 24,
//       weight: 70,
//       height: 185,
//       sex: 'Male',
//       phone: '+251 923 456 789',
//       idNumber: 'ET2345678',
//       talent: 'Photography Pose',
//       language: 'English',
//       course: 'Fashion Runway',
//       courseDuration: '10 Months',
//       status: 'Active',
//       registeredDate: '2024-01-20',
//       profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
//     },
//     {
//       id: 3,
//       fullName: 'Meron Assefa',
//       age: 20,
//       weight: 52,
//       height: 170,
//       sex: 'Female',
//       phone: '+251 934 567 890',
//       idNumber: 'ET3456789',
//       talent: 'Acting',
//       language: 'Oromo & English',
//       course: 'Photo Posing',
//       courseDuration: '3 Months',
//       status: 'Pending',
//       registeredDate: '2024-02-01',
//       profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
//     },
//     {
//       id: 4,
//       fullName: 'Henok Girma',
//       age: 23,
//       weight: 68,
//       height: 182,
//       sex: 'Male',
//       phone: '+251 945 678 901',
//       idNumber: 'ET4567890',
//       talent: 'Fitness',
//       language: 'Amharic',
//       course: 'Personality Development',
//       courseDuration: '6 Months',
//       status: 'Graduated',
//       registeredDate: '2023-09-10',
//       profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
//     }
//   ];

//   const sampleRegistrations = [
//     {
//       id: 101,
//       name: 'Hana Kebede',
//       email: 'hana@example.com',
//       phone: '+251 956 789 012',
//       course: 'Professional Modeling',
//       duration: '6 Months',
//       date: '2024-02-10',
//       status: 'Pending'
//     },
//     {
//       id: 102,
//       name: 'Biruk Alemu',
//       email: 'biruk@example.com',
//       phone: '+251 967 890 123',
//       course: 'Fashion Runway',
//       duration: '10 Months',
//       date: '2024-02-09',
//       status: 'Approved'
//     }
//   ];

//   useEffect(() => {
//     // Check if admin is logged in
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       navigate('/admin');
//     }
    
//     // Load data
//     setTimeout(() => {
//       setStudents(sampleStudents);
//       setRegistrations(sampleRegistrations);
//       setLoading(false);
//     }, 1000);
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin');
//   };

//   const handleDeleteStudent = (id) => {
//     if (window.confirm('Are you sure you want to delete this student?')) {
//       setStudents(students.filter(student => student.id !== id));
//     }
//   };

//   const handleUpdateStatus = (id, newStatus) => {
//     setStudents(students.map(student => 
//       student.id === id ? { ...student, status: newStatus } : student
//     ));
//   };

//   const stats = {
//     totalStudents: students.length,
//     activeStudents: students.filter(s => s.status === 'Active').length,
//     graduatedStudents: students.filter(s => s.status === 'Graduated').length,
//     pendingRegistrations: registrations.filter(r => r.status === 'Pending').length
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       minHeight: '100vh',
//       background: '#f3f4f6',
//     },
//     sidebar: {
//       width: '280px',
//       background: 'linear-gradient(135deg, #1f2937, #111827)',
//       color: 'white',
//       padding: '30px 20px',
//       position: 'fixed',
//       height: '100vh',
//       overflowY: 'auto',
//     },
//     sidebarHeader: {
//       textAlign: 'center',
//       marginBottom: '40px',
//     },
//     sidebarLogo: {
//       fontSize: '48px',
//       marginBottom: '10px',
//     },
//     sidebarTitle: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       background: 'linear-gradient(135deg, #ec4899, #9333ea)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//     },
//     sidebarSubtitle: {
//       fontSize: '12px',
//       color: '#9ca3af',
//       marginTop: '5px',
//     },
//     navItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '12px 16px',
//       marginBottom: '8px',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       color: '#d1d5db',
//     },
//     mainContent: {
//       flex: 1,
//       marginLeft: '280px',
//       padding: '30px',
//     },
//     header: {
//       background: 'white',
//       borderRadius: '16px',
//       padding: '20px 30px',
//       marginBottom: '30px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     },
//     headerTitle: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#1f2937',
//     },
//     logoutButton: {
//       background: '#ef4444',
//       color: 'white',
//       border: 'none',
//       padding: '10px 20px',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     statsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px',
//     },
//     statCard: {
//       background: 'white',
//       padding: '20px',
//       borderRadius: '16px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//     },
//     statIcon: {
//       fontSize: '32px',
//       marginBottom: '10px',
//     },
//     statValue: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       color: '#1f2937',
//     },
//     statLabel: {
//       fontSize: '14px',
//       color: '#6b7280',
//       marginTop: '5px',
//     },
//     tableContainer: {
//       background: 'white',
//       borderRadius: '16px',
//       padding: '20px',
//       overflowX: 'auto',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//     },
//     th: {
//       padding: '12px',
//       textAlign: 'left',
//       borderBottom: '2px solid #e5e7eb',
//       color: '#374151',
//       fontWeight: '600',
//     },
//     td: {
//       padding: '12px',
//       borderBottom: '1px solid #e5e7eb',
//       color: '#6b7280',
//     },
//     statusBadge: {
//       display: 'inline-block',
//       padding: '4px 12px',
//       borderRadius: '20px',
//       fontSize: '12px',
//       fontWeight: '600',
//     },
//     actionButton: {
//       padding: '6px 12px',
//       margin: '0 4px',
//       border: 'none',
//       borderRadius: '8px',
//       cursor: 'pointer',
//       fontSize: '12px',
//       transition: 'all 0.3s ease',
//     },
//     modal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'rgba(0,0,0,0.7)',
//       zIndex: 1000,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     modalContent: {
//       background: 'white',
//       borderRadius: '20px',
//       maxWidth: '500px',
//       width: '90%',
//       maxHeight: '80vh',
//       overflowY: 'auto',
//       padding: '30px',
//     },
//     profileImage: {
//       width: '100px',
//       height: '100px',
//       borderRadius: '50%',
//       objectFit: 'cover',
//       margin: '0 auto 20px',
//       display: 'block',
//     },
//   };

//   const renderOverview = () => (
//     <>
//       <div style={styles.statsGrid}>
//         <div style={styles.statCard}>
//           <div style={styles.statIcon}>👨‍🎓</div>
//           <div style={styles.statValue}>{stats.totalStudents}</div>
//           <div style={styles.statLabel}>Total Students</div>
//         </div>
//         <div style={styles.statCard}>
//           <div style={styles.statIcon}>✅</div>
//           <div style={styles.statValue}>{stats.activeStudents}</div>
//           <div style={styles.statLabel}>Active Students</div>
//         </div>
//         <div style={styles.statCard}>
//           <div style={styles.statIcon}>🎓</div>
//           <div style={styles.statValue}>{stats.graduatedStudents}</div>
//           <div style={styles.statLabel}>Graduated</div>
//         </div>
//         <div style={styles.statCard}>
//           <div style={styles.statIcon}>⏳</div>
//           <div style={styles.statValue}>{stats.pendingRegistrations}</div>
//           <div style={styles.statLabel}>Pending Approvals</div>
//         </div>
//       </div>

//       <div style={styles.tableContainer}>
//         <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>Recent Students</h3>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Name</th>
//               <th style={styles.th}>Course</th>
//               <th style={styles.th}>Duration</th>
//               <th style={styles.th}>Status</th>
//               <th style={styles.th}>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.slice(0, 5).map(student => (
//               <tr key={student.id}>
//                 <td style={styles.td}>{student.fullName}</td>
//                 <td style={styles.td}>{student.course}</td>
//                 <td style={styles.td}>{student.courseDuration}</td>
//                 <td style={styles.td}>
//                   <span style={{
//                     ...styles.statusBadge,
//                     background: student.status === 'Active' ? '#d1fae5' : 
//                                student.status === 'Graduated' ? '#fed7aa' : '#fed7aa',
//                     color: student.status === 'Active' ? '#065f46' : 
//                            student.status === 'Graduated' ? '#92400e' : '#92400e',
//                   }}>
//                     {student.status}
//                   </span>
//                 </td>
//                 <td style={styles.td}>{student.registeredDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );

//   const renderStudents = () => (
//     <div style={styles.tableContainer}>
//       <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>All Students</h3>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Photo</th>
//             <th style={styles.th}>Full Name</th>
//             <th style={styles.th}>Age/Height</th>
//             <th style={styles.th}>Phone</th>
//             <th style={styles.th}>Course</th>
//             <th style={styles.th}>Duration</th>
//             <th style={styles.th}>Status</th>
//             <th style={styles.th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.id}>
//               <td style={styles.td}>
//                 <img src={student.profileImage} alt={student.fullName} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
//               </td>
//               <td style={styles.td}>{student.fullName}</td>
//               <td style={styles.td}>{student.age} yrs / {student.height}cm</td>
//               <td style={styles.td}>{student.phone}</td>
//               <td style={styles.td}>{student.course}</td>
//               <td style={styles.td}>{student.courseDuration}</td>
//               <td style={styles.td}>
//                 <select
//                   value={student.status}
//                   onChange={(e) => handleUpdateStatus(student.id, e.target.value)}
//                   style={{
//                     padding: '4px 8px',
//                     borderRadius: '8px',
//                     border: '1px solid #e5e7eb',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Graduated">Graduated</option>
//                 </select>
//               </td>
//               <td style={styles.td}>
//                 <button
//                   onClick={() => {
//                     setSelectedStudent(student);
//                     setShowModal(true);
//                   }}
//                   style={{ ...styles.actionButton, background: '#3b82f6', color: 'white' }}
//                 >
//                   View
//                 </button>
//                 <button
//                   onClick={() => handleDeleteStudent(student.id)}
//                   style={{ ...styles.actionButton, background: '#ef4444', color: 'white' }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderRegistrations = () => (
//     <div style={styles.tableContainer}>
//       <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>New Registrations</h3>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Name</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Phone</th>
//             <th style={styles.th}>Course</th>
//             <th style={styles.th}>Duration</th>
//             <th style={styles.th}>Date</th>
//             <th style={styles.th}>Status</th>
//             <th style={styles.th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {registrations.map(reg => (
//             <tr key={reg.id}>
//               <td style={styles.td}>{reg.name}</td>
//               <td style={styles.td}>{reg.email}</td>
//               <td style={styles.td}>{reg.phone}</td>
//               <td style={styles.td}>{reg.course}</td>
//               <td style={styles.td}>{reg.duration}</td>
//               <td style={styles.td}>{reg.date}</td>
//               <td style={styles.td}>
//                 <span style={{
//                   ...styles.statusBadge,
//                   background: reg.status === 'Pending' ? '#fed7aa' : '#d1fae5',
//                   color: reg.status === 'Pending' ? '#92400e' : '#065f46',
//                 }}>
//                   {reg.status}
//                 </span>
//               </td>
//               <td style={styles.td}>
//                 {reg.status === 'Pending' && (
//                   <>
//                     <button style={{ ...styles.actionButton, background: '#10b981', color: 'white' }}>
//                       Approve
//                     </button>
//                     <button style={{ ...styles.actionButton, background: '#ef4444', color: 'white' }}>
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <div style={styles.sidebarHeader}>
//           <div style={styles.sidebarLogo}>👣</div>
//           <div style={styles.sidebarTitle}>Nexus Admin</div>
//           <div style={styles.sidebarSubtitle}>Modeling School & Management</div>
//         </div>

//         <div>
//           {[
//             { id: 'overview', label: '📊 Overview', icon: '📊' },
//             { id: 'students', label: '👨‍🎓 Students', icon: '👨‍🎓' },
//             { id: 'registrations', label: '📝 Registrations', icon: '📝' },
//             { id: 'courses', label: '📚 Courses', icon: '📚' },
//             { id: 'settings', label: '⚙️ Settings', icon: '⚙️' },
//           ].map(item => (
//             <div
//               key={item.id}
//               style={{
//                 ...styles.navItem,
//                 background: activeTab === item.id ? 'rgba(236, 72, 153, 0.2)' : 'transparent',
//                 borderLeft: activeTab === item.id ? '3px solid #ec4899' : '3px solid transparent',
//               }}
//               onClick={() => setActiveTab(item.id)}
//               onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
//               onMouseLeave={(e) => e.currentTarget.style.background = activeTab === item.id ? 'rgba(236, 72, 153, 0.2)' : 'transparent'}
//             >
//               <span>{item.icon}</span>
//               <span>{item.label}</span>
//             </div>
//           ))}
//         </div>

//         <div
//           style={{ ...styles.navItem, marginTop: 'auto', position: 'absolute', bottom: '30px', width: 'calc(100% - 40px)' }}
//           onClick={handleLogout}
//           onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
//           onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
//         >
//           <span>🚪</span>
//           <span>Logout</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={styles.mainContent}>
//         <div style={styles.header}>
//           <div>
//             <h1 style={styles.headerTitle}>
//               {activeTab === 'overview' && 'Dashboard Overview'}
//               {activeTab === 'students' && 'Student Management'}
//               {activeTab === 'registrations' && 'Registration Requests'}
//               {activeTab === 'courses' && 'Course Management'}
//               {activeTab === 'settings' && 'Admin Settings'}
//             </h1>
//             <p style={{ color: '#6b7280', marginTop: '5px' }}>
//               Welcome back, Admin! Here's what's happening today.
//             </p>
//           </div>
//           <button onClick={handleLogout} style={styles.logoutButton}>
//             Logout
//           </button>
//         </div>

//         {activeTab === 'overview' && renderOverview()}
//         {activeTab === 'students' && renderStudents()}
//         {activeTab === 'registrations' && renderRegistrations()}
//         {activeTab === 'courses' && (
//           <div style={styles.tableContainer}>
//             <h3 style={{ marginBottom: '20px' }}>Course Management</h3>
//             <p>Course management interface coming soon...</p>
//           </div>
//         )}
//         {activeTab === 'settings' && (
//           <div style={styles.tableContainer}>
//             <h3 style={{ marginBottom: '20px' }}>Admin Settings</h3>
//             <p>Settings interface coming soon...</p>
//           </div>
//         )}
//       </div>

//       {/* Student Details Modal */}
//       {showModal && selectedStudent && (
//         <div style={styles.modal} onClick={() => setShowModal(false)}>
//           <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//             <img src={selectedStudent.profileImage} alt={selectedStudent.fullName} style={styles.profileImage} />
//             <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{selectedStudent.fullName}</h2>
            
//             <div style={{ marginBottom: '15px' }}>
//               <strong>Age:</strong> {selectedStudent.age}<br/>
//               <strong>Weight:</strong> {selectedStudent.weight} kg<br/>
//               <strong>Height:</strong> {selectedStudent.height} cm<br/>
//               <strong>Sex:</strong> {selectedStudent.sex}<br/>
//               <strong>Phone:</strong> {selectedStudent.phone}<br/>
//               <strong>ID Number:</strong> {selectedStudent.idNumber}<br/>
//               <strong>Talent:</strong> {selectedStudent.talent}<br/>
//               <strong>Language:</strong> {selectedStudent.language}<br/>
//               <strong>Course:</strong> {selectedStudent.course}<br/>
//               <strong>Duration:</strong> {selectedStudent.courseDuration}<br/>
//               <strong>Status:</strong> {selectedStudent.status}<br/>
//               <strong>Registered:</strong> {selectedStudent.registeredDate}<br/>
//             </div>

//             <button
//               onClick={() => setShowModal(false)}
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 background: '#ec4899',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontWeight: '600',
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;