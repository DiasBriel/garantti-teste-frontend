type Props = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </>
  );
};

export default SectionTitle;
