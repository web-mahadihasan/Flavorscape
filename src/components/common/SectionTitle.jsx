const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mx-auto">
      <p className="text-yellow font-inter italic font-medium text-lg">
        {subtitle}
      </p>
      <h3 className="uppercase text-3xl font-inter  font-semibold border-y-2 border-base-300 max-w-[350px] mx-auto my-4 py-2">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
