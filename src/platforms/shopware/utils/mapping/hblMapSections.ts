import { CmsSection } from '@hubblecommerce/hubble/platforms/shopware/api-client'
import { Section } from '@hubblecommerce/hubble/commons'
import { hblMapMedia, hblMapBlocks } from '#imports'

export function hblMapSections (swSections: CmsSection[]): Section[] {
    return swSections.map((section: CmsSection) => {
        return {
            type: section.type,
            name: section.name,
            sizingMode: section.sizingMode != null ? section.sizingMode : 'boxed',
            // @ts-ignore
            blocks: hblMapBlocks(section.blocks),
            ...(section.cssClass != null && { cssClass: section.cssClass }),
            ...(section.backgroundColor != null && { backgroundColor: section.backgroundColor }),
            ...(section.backgroundMedia != null && { backgroundMedia: hblMapMedia(section.backgroundMedia) }),
            ...(section.backgroundMediaMode != null && { backgroundMediaMode: section.backgroundMediaMode }),
            ...(section.mobileBehavior != null && { mobileSidebarBehavior: section.mobileBehavior })
        }
    })
}
