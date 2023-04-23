const ShimmerUI = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-cards-container">
            <div className="shimmer-cards-img"></div>
            <div className="shimmer-cards-name"></div>
            <div className="shimmer-cards-cuisine"></div>
            <div className="shimmer-cards-costForTwo"></div>
            <div className="shimmer-cards-avgRating"></div>
            <div className="shimmer-cards-deliveryTime"></div>
          </div>
        ))}
    </>
  );
};

export default ShimmerUI;
