export default function Section({ children, removeMobilePadding = false, removeSectionPadding = false, classes = '', styles = {} }) {
    let sectionClasses = removeMobilePadding ? classes : `${classes}`;
    return (
        <section className={sectionClasses} style={styles}>
            <div className={``}>
                {children}
            </div>
        </section>
    )
}
