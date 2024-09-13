import AdminChart from "../../../components/AdminChart";

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT SIDE */}
            <div>
            <AdminChart/>
            </div>
            {/* RIGHT SIDE */}
            <div>
                
            </div>
        </div>
    );
};

export default AdminPage;