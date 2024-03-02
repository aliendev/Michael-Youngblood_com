import FeaturesTitle from "./features-title"
import FeatureHangingIcon from "./feature-hangingicon"

export default function Features3Up() {
    return (
        <div class="container px-4 py-5" id="hanging-icons">
            
            <FeaturesTitle text="Hanging icons" />

            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                
                <FeatureHangingIcon 
                        icon="bi bi-collection" 
                        title="Featured title" 
                        text="Paragraph of text beneath the heading to explain the heading." 
                        button="Primary Button" 
                        buttonURL="" />

                    <FeatureHangingIcon 
                        icon="bi bi-collection" 
                        title="Featured title" 
                        text="Paragraph of text beneath the heading to explain the heading." 
                        button="Primary Button" 
                        buttonURL="" />

                    <FeatureHangingIcon 
                        icon="bi bi-collection" 
                        title="Featured title" 
                        text="Paragraph of text beneath the heading to explain the heading." 
                        button="Primary Button" 
                        buttonURL="" />

            </div>
        </div>
    )
}