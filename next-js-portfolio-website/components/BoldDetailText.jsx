export default function BoldDetailText({boldText, detailText}) {
    return (
        <div className="flex row info-row">
            <div className="standard-header-text-size bold">
                {boldText}
            </div>
            <div className="standard-text-size">
                {detailText}
            </div>
        </div>
    );
}