import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

import { AdRequest } from './rest/AdRequest';
import { DecisionResponse } from './rest/DecisionResponse';
import { User } from './rest/User';


export interface AdzerkConfig {
    apiKey: string;
    networkId: number;
    siteId: number;
    baseUrl?: string;
}

export const AdzerkConfigToken = new InjectionToken<AdzerkConfig>('adzerk-config');

/**
 * Service interface for Native Ads API
 */
@Injectable()
export class AdzerkService {
    private baseUrl: string;

    constructor(
        private http: HttpClient,
        @Inject(AdzerkConfigToken) private config: AdzerkConfig) {
        this.baseUrl = config.baseUrl || 'http://engine.adzerk.net';
    }

    /**
     * Request an Ad.
     * <p/>
     * NOTE: The placement in the Request corresponds to an ad placement on a page or app.
     */
    public async requestAds(request: AdRequest): Promise<DecisionResponse> {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        };
        const res = await this.http.post(`${this.baseUrl}/api/v2`, request, options).toPromise();

        return <DecisionResponse>res;
    }

    /**
     * Set the custom properties of a User by specifying properties in a JSON string
     * <p/>
     * Example: POST http://engine.adzerk.net/udb/{networkId}/custom?userKey=<user-key>
     */
    public async setUserProperties(networkId: number, userKey: string, properties: any): Promise<any> {
        const options: any = {
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'text',
            withCredentials: true
        };
        const res = await this.http.post(`${this.baseUrl}/udb/${networkId}/custom?userKey=${userKey}`,
            properties, options).toPromise();
        return res;
    }

    /**
     * Reads a User from UserDB.
     * <p/>
     * The User object contains the users key, custom properties, interests and additional details.
     * <p/>
     * Example:  GET http://engine.adzerk.net/udb/{networkid}/read?userKey=<user-key>
     */
    public async getUser(networkId: number, userKey: string): Promise<User> {
        const options = {
            headers: {
                'X-Adzerk-ApiKey': this.config.apiKey
            }
        };
        const res = await this.http.get(`${this.baseUrl}/udb/${networkId}/read?userKey=${userKey}`, options).toPromise();
        return <User>res;
    }

    /**
     * Sets a User interest. The User object has a list of behavioral interest keywords (ie, cars, sports, ponies).
     * <p/>
     * Example: GET http://engine.adzerk.net/udb/{networkId}/interest/i.gif?userKey=<user-key>&interest=<interest>
     */
    public async setUserInterest(networkId: number, userKey: string, interest: string): Promise<any> {
        const res = await this.http.get(`${this.baseUrl}/udb/${networkId}/interest/i.gif?userKey=${userKey}&interest=${interest}`
            , { responseType: 'arraybuffer' }).toPromise();
        console.log(`User interest '${interest}' set.`);
        return res;
    }

    /**
     * Sets a flag to allow User to opt-out of UserDB tracking. This call clears the entire user record and then
     * sets a value of "optedOut" to true.
     * <p/>
     * Example: GET http://engine.adzerk.net/udb/{networkid}/optout/i.gif?userKey=<user-key>
     */
    public async setUserOptout(networkId: number, userKey: string): Promise<any> {
        const options = {
            headers: {
                'X-Adzerk-ApiKey': this.config.apiKey
            }
        };
        return await this.http.get(`${this.baseUrl}/udb/${networkId}/optout/i.gif?userKey=${userKey}`, options).toPromise();
    }

    /**
     * Retargeting creates a new number set called Segments-{brandId} that contains each of the segments.
     * <p/>
     * Example: GET http://engine.adzerk.net/udb/{networkId}/rt/{brandId}/{segment}/i.gif?userKey=<user-key>
     */
    public async setUserRetargeting(networkId: number, brandId: number, segment: string, userKey: string): Promise<any> {
        const options = {
            headers: {
                'X-Adzerk-ApiKey': this.config.apiKey
            }
        };
        return await this.http.get(`${this.baseUrl}/udb/${networkId}/rt/${brandId}/${segment}/i.gif?userKey=${userKey}`,
            options).toPromise();
    }
}
