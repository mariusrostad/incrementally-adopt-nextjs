package no.mariusrostad.mvcbackend;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest")
public class BackendRestController {

    @GetMapping
    public String headers(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        List<String> result = new ArrayList<>();

        for (Cookie cookie : cookies) {
            result.add(cookie.getName() + cookie.getValue());
        }
        return String.join("", result);
    }
}
