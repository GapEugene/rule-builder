import useGroupDragAndDrop from '../../hooks/useGroupDragAndDrop';
import styles from './Layout.module.css';

const Layout = ({ title, children }) => {
  const { handleDragOver, handleDrop } = useGroupDragAndDrop(null);

  return (
    <div
      className={styles.layout}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="container py-2">
        <h1 className="h4 mb-3">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
