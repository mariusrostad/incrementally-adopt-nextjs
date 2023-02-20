package no.mariusrostad.mvcbackend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MvcController {

    @GetMapping
    public String get() {
        return "index";
    }
}
