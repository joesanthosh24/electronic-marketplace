import { UPDATE_COLLECTIONS } from './shop-collections.types';

export const updateCollections = collectionsMapping => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMapping
});