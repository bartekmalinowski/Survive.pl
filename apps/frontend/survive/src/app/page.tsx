
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './home/Map';
import Table from './home/Table';
import SurvivalNews from './home/SurvivalNews';
import Header from './home/Header';

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />
      <Map />
      <Table />
      <SurvivalNews />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};